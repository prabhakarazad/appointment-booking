import React from "react";

import ArrowDown from "../icons/ArrowDown";

function Dropdown() {
  return (
    <div className="dropdown-main">
      <p className="dropdown-time">1 hour</p>
      <ArrowDown />
    </div>
  );
}

export default React.memo(Dropdown);
