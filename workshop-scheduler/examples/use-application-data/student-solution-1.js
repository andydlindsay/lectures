import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day });

  const setSpots = (id, appointments) => {
    const newDays = [...state.days];
    let availableSpots = 0;

    for (const day of newDays) {
      if (day.appointments.includes(id)) {
        for (const appointmentID of day.appointments) {
          if (appointments[appointmentID].interview === null) {
            availableSpots++;
          }
        }
        const index = newDays.indexOf(day);
        newDays[index].spots = availableSpots;
      }
    }
    return newDays;
  };

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      })) 
    });
  }, []);

  const bookInterview = async (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    await axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      const days = setSpots(id, appointments);
      setState({ ...state, appointments, days });
    });
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`).then(() => {
      const days = setSpots(id, appointments);
      setState({ ...state, appointments, days });
    });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
    setSpots
  };
}
