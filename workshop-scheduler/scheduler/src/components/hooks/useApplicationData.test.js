import { updateSpotsInDays2 } from "./useApplicationData";
const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: [1, 2],
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
      interviewers: [1, 2],
      spots: 1,
    },
  ],
  appointments: {
    1: { id: 1, time: "12pm", interview: null },
    2: { id: 2, time: "1pm", interview: null },
    3: {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 },
    },
    4: { id: 4, time: "3pm", interview: null },
    5: {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 },
    },
  },
  interviewers: {
    1: {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png",
    },
    2: {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png",
    },
  },
};

const appointments = {
  1: { id: 1, time: "12pm", interview: null },
  2: { id: 2, time: "1pm", interview: null },
  3: {
    id: 3,
    time: "2pm",
    interview: null,
  },
  4: {
    id: 4,
    time: "3pm",
    interview: { student: "Chad Takahashi", interviewer: 2 },
  },
  5: {
    id: 5,
    time: "4pm",
    interview: { student: "Chad Takahashi", interviewer: 2 },
  },
  6: { id: 1, time: "12pm", interview: null },
  7: { id: 2, time: "1pm", interview: null },
  8: {
    id: 3,
    time: "2pm",
    interview: { student: "Archie Cohen", interviewer: null },
  },
  9: {
    id: 4,
    time: "3pm",
    interview: { student: "Chad Takahashi", interviewer: 2 },
  },
  10: {
    id: 5,
    time: "4pm",
    interview: { student: "Chad Takahashi", interviewer: 2 },
  },
};
test("updateSpotsInDays2 returns an array", () => {
  const result = updateSpotsInDays2(state, appointments);
  expect(Array.isArray(result)).toBe(true);
});

test("updateSpotsInDays2 returns an array with a length matching the number of days", () => {
  const result = updateSpotsInDays2(state, appointments);
  expect(result.length).toEqual(2);
});

test("updateSpotsInDays2 returns an array with correct day objects and spots", () => {
  const result = updateSpotsInDays2(state, appointments);
  expect(result[0].spots).toEqual(3);
  expect(result[1].spots).toEqual(2);
});
