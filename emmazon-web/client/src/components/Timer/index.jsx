import { useState, useEffect } from "react";

const Timer = ({ days, hours, minutes, seconds }) => {
  // Initial state object for the timer with days, hours, minutes, and seconds
  const initialTime = {
    days,
    hours,
    minutes,
    seconds,
  };

  const [time, setTime] = useState(initialTime); // State to hold the current countdown time

  useEffect(() => {
    // Effect to handle the countdown logic
    const intervalId = setInterval(() => {
      if (time.seconds > 0) {
        // If there are seconds left, decrement seconds
        setTime((prevTime) => ({
          ...prevTime, // Spread the previous time values to keep them unchanged
          seconds: prevTime.seconds - 1, // Decrement the seconds
        }));
      } else {
        if (time.minutes > 0) {
          // If seconds are zero and there are minutes left, decrement minutes and reset seconds to 59
          setTime((prevTime) => ({
            ...prevTime,
            minutes: prevTime.minutes - 1,
            seconds: 59,
          }));
        } else {
          if (time.hours > 0) {
            // If minutes are zero and there are hours left, decrement hours, reset minutes and seconds
            setTime((prevTime) => ({
              ...prevTime,
              hours: prevTime.hours - 1,
              minutes: 59,
              seconds: 59,
            }));
          } else {
            if (time.days > 0) {
              // If hours are zero and there are days left, decrement days, reset hours, minutes, and seconds
              setTime((prevTime) => ({
                ...prevTime,
                days: prevTime.days - 1,
                hours: 23,
                minutes: 59,
                seconds: 59,
              }));
            } else {
              // If no time is left, clear the interval to stop the countdown
              clearInterval(intervalId);
            }
          }
        }
      }
    }, 1000); // Run the interval every 1000 milliseconds (1 second)

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts or updates
  }, [time]); // Dependency array includes 'time' to trigger effect when time changes

  // Function to format time values to always show two digits (e.g., 09 instead of 9)
  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="bg-grayD/80 flex justify-around p-3 w-full"> {/* Container for the timer with background and spacing */}
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-center">{formatTime(time.days)}</h1> {/* Display days with formatted value */}
        <p className="text-sm text-center">DAYS</p> {/* Label for days */}
      </div>
      <span className="border-r border-gray-400"></span> {/* Divider between time units */}
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-center">{formatTime(time.hours)}</h1> {/* Display hours with formatted value */}
        <p className="text-sm text-center">HOURS</p> {/* Label for hours */}
      </div>
      <span className="border-r border-gray-400"></span> {/* Divider between time units */}
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-center">{formatTime(time.minutes)}</h1> {/* Display minutes with formatted value */}
        <p className="text-sm text-center">MINUTES</p> {/* Label for minutes */}
      </div>
      <span className="border-r border-gray-400"></span> {/* Divider between time units */}
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-center">{formatTime(time.seconds)}</h1> {/* Display seconds with formatted value */}
        <p className="text-sm text-center">SECONDS</p> {/* Label for seconds */}
      </div>
    </div>
  );
};

export default Timer; // Exporting Timer component as default