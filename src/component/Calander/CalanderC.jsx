import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calander() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [plans, setPlans] = useState({});
  const [currentPlan, setCurrentPlan] = useState("");

  const handleDayClick = value => {
    setSelectedDate(value);
    setCurrentPlan(plans[value.toDateString()] || "");
  };

  const handleInputChange = event => {
    setCurrentPlan(event.target.value);
  };

  const handleSave = () => {
    setPlans({
      ...plans,
      [selectedDate.toDateString()]: currentPlan,
    });
    setSelectedDate(null);
    setCurrentPlan("");
  };
  return (
    <div className="border-2 border-dashed border-teal-400 bg-slate-100 p-4 m-5 rounded-lg justify-evenly font-serif flex max-[790px]:grid max-[790px]:justify-items-center ">
      <Calendar
        onClickDay={handleDayClick}
        className="m-5 bg-stone-200 hover:bg-stone-100 rounded-lg max-[470px]:hidden"
      />
      {selectedDate && (
        <div className="bg-slate-300 grid content-center justify-items-center p-5 rounded-lg my-5">
          <h2 className="flex items-center justify-center text-md font-serif bg-transparent rounded-md mx-3 mb-4 text-stone-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
              />
            </svg>
            Plan for {selectedDate.toDateString()}
          </h2>
          <textarea
            value={currentPlan}
            onChange={handleInputChange}
            className="bg-slate-50 border rounded-lg resize-none p-4 w-full"
            rows="6"
          ></textarea>
          <button
            onClick={handleSave}
            className="flex items-center justify-center w-full bg-teal-300 text-stone-900 p-3 rounded-lg m-3 hover:scale-105 hover:bg-teal-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default Calander;
