import React from "react";
import PropTypes from "prop-types";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

function InterviewerList(props) {
  const interviewerList = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        id={interviewer.id}
        avatar={interviewer.avatar}
        onChange={() => {
          props.onChange(interviewer.id);
        }}
        selected={interviewer.id === props.value}></InterviewerListItem>
    );
  });
  return <section className="interviewers">{interviewerList}</section>;
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
export default InterviewerList;
