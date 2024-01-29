import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";
import SlotSection from "./components/slotSection";
import Footer from "./components/Footer";

import { DateFormat } from "./helper/dateFormat";
import RightBand1 from "./assets/RightBand1.png";
import RightBand2 from "./assets/RightBand2.png";
import RightBand3 from "./assets/RightBand3.png";

import "./App.css";

function App() {
  const [dateSlot, setDateSlot] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const fetchTimeSlots = async (startDate) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=2026-01-30`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setIsLoading(false);
      setDateSlot(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const formattedStartDate = DateFormat(selectedDate);
    fetchTimeSlots(formattedStartDate);
  }, [selectedDate]);

  return (
    <div className="main">
      <Navbar />
      <div className="calendar-slot">
        <Calendar onDateChange={handleDateChange} />
        <SlotSection
          dateSlot={dateSlot}
          selectedDate={selectedDate}
          isLoading={isLoading}
        />
      </div>
      <div className="footer-section">
        <Footer />
      </div>

      {/* <img className="img-band1" src={RightBand1} alt="" />
      <img className="img-band2" src={RightBand2} alt="" />
      <img className="img-band3" src={RightBand3} alt="" /> */}
    </div>
  );
}

export default App;
