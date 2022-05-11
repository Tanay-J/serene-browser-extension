import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [date, setDate] = useState(new Date());
  const daysArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const day = daysArr[date.getDay() - 1];

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div>
      <h1 className="timer text-light">
        {hours}:{minutes}
      </h1>
      <p className="text-light">{day}</p>
    </div>
  );
};
export { CurrentTime };
