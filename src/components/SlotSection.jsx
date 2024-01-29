import React from "react";

import Dropdown from "./Dropdown";
import SlotButton from "./SlotButton";
import Loader from "./Loader";

import { DateFormat, formatDate } from "../helper/dateFormat";

function SlotSection({ dateSlot, selectedDate, isLoading }) {
  const formatSelecetdDate = DateFormat(selectedDate);
  const filteredData = dateSlot.filter(
    (item) => item.date === formatSelecetdDate
  );

  const convertTimeFormat = (isoTimeString) => {
    const date = new Date(isoTimeString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formattedSlots = filteredData.map((item) => ({
    date: item.date,
    slots: item.slots.map((slot) => ({
      start_time: convertTimeFormat(slot.start_time),
      end_time: convertTimeFormat(slot.end_time),
    })),
  }));

  const formattedAvailableDate = formatDate(selectedDate);

  return (
    <div className="slot-section-container">
      <div className="dropdown-container">
        <p className="dropdown-heading">Select FROM Variants</p>
        <Dropdown />
        <div className="dropdown-border" />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="slot-date-section">
          <p className="currentDate">{`${formattedAvailableDate} - Available Slots`}</p>
          <div className="slotList">
            {formattedSlots?.map((items) => {
              return items?.slots?.map((slot, index) => {
                return <SlotButton slot={slot} />;
              });
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SlotSection;
