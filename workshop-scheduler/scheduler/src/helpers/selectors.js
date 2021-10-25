export function getAppointmentsForDay(state, day) {
  const dayObj = state.days.find((obj) => obj.name === day);
  if (!dayObj) return [];
  const result = dayObj.appointments.map((appId) => state.appointments[appId]);
  return result;
}

export function getInterview(state, interview) {
  let result = {};
  if (interview && state["interviewers"][interview["interviewer"]]) {
    const theInterview = state["interviewers"][interview["interviewer"]];
    result = {
      id: theInterview["id"],
      name: theInterview["name"],
      avatar: theInterview["avatar"],
    };
    return { ...interview, interviewer: { ...result } };
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  if (!state.days.length) return [];
  const dayObj = state.days.find((obj) => obj.name === day);
  if (!dayObj) return [];

  const result = dayObj.interviewers.map((id) => {
    return state.interviewers[id];
  });
  return result;
}
