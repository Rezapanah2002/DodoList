import React, { useState } from "react";
import { useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (!isActive && time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(1500);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-slate-100 p-4 m-6 rounded-lg font-serif border-2 border-dashed border-teal-400">
      <div className="grid justify-items-center p-1">
        <h1 className="font-serif border-b-2 border-teal-200 m-5">Pomodoro</h1>
        <div
          className={`timer ${
            isActive
              ? "active border-2 border-dashed border-teal-500 rounded-lg p-1"
              : "border-4 border-teal-500 border-double rounded-lg p-1"
          }`}
        >
          {formatTime()}
        </div>

        <div className="controls">
          {!isActive ? (
            <button
              className="bg-teal-300 text-stone-900 p-1 rounded-lg m-3 hover:bg-teal-400 hover:scale-105"
              onClick={startTimer}
            >
              Start
            </button>
          ) : (
            <button
              className="bg-rose-500 text-stone-900 p-1 rounded-lg m-3 hover:bg-rose-600 hover:scale-105"
              onClick={() => setIsActive(false)}
            >
              Pause
            </button>
          )}
          <button
            className="bg-orange-300 text-stone-900 p-1 rounded-lg m-3 hover:bg-orange-400 hover:scale-105"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
