import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";
function InterviewerListItem({ id, name, avatar, selected, onChange }) {
  const interviewerListItemClass = classnames("interviewers__item", {
    "interviewers__item--selected": selected,
  });
  return (
    <li onClick={onChange} className={interviewerListItemClass}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}

export default InterviewerListItem;
