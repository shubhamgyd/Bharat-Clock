import { useState, useEffect } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="time-container">
      <p className="time-text">
        The current date is {time.toLocaleDateString()} and the current time is{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default CurrentTime;
