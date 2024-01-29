import React, { useState } from "react";

import { Calendar as DateCalender } from "react-calendar";

import "react-calendar/dist/Calendar.css";

function Calendar({ onDateChange }) {
  const [value, onChange] = useState(new Date());

  const handleDateClick = (date) => {
    onChange(date); // Update local state with selected date
    onDateChange(date); // Pass selected date to the parent component
  };

  return (
    <div className="calendar-main">
      <div className="heading-container">
        <h1 className="cal-heading">Test Service</h1>
        <div className="cal-para">
          <p className="cal-para1">Timezone:</p>
          <p className="cal-para2">Asia/Calcutta</p>
        </div>
      </div>
      <DateCalender
        onChange={handleDateClick}
        value={value}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
}

export default Calendar;
