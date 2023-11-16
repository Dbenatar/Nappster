import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={startStopwatch}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
