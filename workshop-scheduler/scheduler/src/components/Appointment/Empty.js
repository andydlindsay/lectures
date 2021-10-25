import React from "react";

function Empty({ onAdd }) {
  return (
    <main className="appointment__add">
      <img
        onClick={onAdd}
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
      />
    </main>
  );
}

export default Empty;
