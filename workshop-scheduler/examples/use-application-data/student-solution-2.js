import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments:{},
    interviewers:{}
  })
  const setDay = day => setState({ ...state, day });
  
  // Should only render API data once therfore empty [] declaration 
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers'),
    ]).then((all) => {
      const days = all[0].data;
      const appointments = all[1].data;
      const interviewers = all[2].data;

      setState(prev => ({...prev, days, appointments, interviewers }));
    });  
  }, []);

  // Function returns a put request via api once the save button has been cliked via Form.jsx.
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const newState = {
      ...state,
      appointments
    };
    return axios.put(`/api/appointments/${id}`, {interview})
    .then(() => updateSpots(newState, id))
  };

  //Function removes an appointment from the databse once a user selects Delete via the Appointment (index.jsx)
  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const newState = {
      ...state,
      appointments
    };
    return axios.delete(`/api/appointments/${id}`, {interview})
    .then(() => updateSpots(newState, id));
  };

  // Updates the value of the key "spots" inside a specific day, based on appointment id.
  function updateSpots(newState, id) {
    let counter = 0;
    // Finds the day object inside state.days []
    const foundDay = newState.days.find((element) =>
      element.appointments.includes(id)
    );
    //.Finds the day {} index inside the days []
    const dayIndex = newState.days.findIndex(
      (element) => element.id === foundDay.id
    );
    // Loops through the day.appointments [] & if interview  is null + to counter
    for (const appID of foundDay.appointments) {
      if (newState.appointments[appID].interview === null) counter++;
    }
    const dayObj = { ...foundDay, spots: counter };
    newState.days[dayIndex] = dayObj;

    setState(newState);
  };
  
  return {state, setDay, bookInterview, cancelInterview}
};
