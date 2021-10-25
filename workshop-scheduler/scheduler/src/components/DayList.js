import React from "react";
import "components/DayList.scss";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const day = props.days.map((e, i) => {
    return (
      <DayListItem
        key={i}
        name={e.name}
        spots={e.spots}
        selected={e.name === props.day}
        setDay={props.setDay}
      />
    );
  });
  return <ul>{day}</ul>;
}
