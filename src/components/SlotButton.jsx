import React, { useState } from "react";

import Check from "../icons/Check";

function SlotButton({ slot }) {
  const [isSeleted, setIsSeleted] = useState(false);
  return (
    <>
      {!isSeleted ? (
        <div
          className="main-btn-container"
          onClick={() => {
            setIsSeleted(true);
          }}
        >
          <p className="btn-name">{`${slot.start_time}-${slot.end_time}`}</p>
        </div>
      ) : (
        <div
          className="selecetdBtn"
          onClick={() => {
            // setIsSeleted((prev) => !prev);
          }}
        >
          <p className="selecetd-btn-name">{`${slot.start_time}-${slot.end_time}`}</p>
          <Check />
        </div>
      )}
    </>
  );
}

export default SlotButton;
