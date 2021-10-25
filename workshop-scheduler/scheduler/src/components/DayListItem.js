import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const DayListClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });

  const formatSpots = () => {
    if (props.spots === 0) return "no spots remaining";
    if (props.spots === 1) return `${props.spots} spot remaining`;
    return `${props.spots} spots remaining`;
  };
  return (
    <li className={DayListClass} onClick={() => props.setDay(props.name)}>
      <h2 className={DayListClass}>{props.name}</h2>
      <h3 className={DayListClass}>{formatSpots()}</h3>
    </li>
  );
}
