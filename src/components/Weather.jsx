import { useEffect, useState } from "react";
import { getWeatherUpdate } from "../utils/api-requests";

const Weather = () => {
  const [weather, setWeather] = useState({
    city: "",
    temp: "",
    icon: "",
    desc: "",
  });

  useEffect(() => {
    getWeatherUpdate(setWeather);
    const timer = setInterval(() => getWeatherUpdate(setWeather), 3600000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="weather-container">
      <img className="weather-icon" src={weather.icon} />
      <div>
        <h2 className="weather-text text-light">{weather.temp}</h2>
        <small className="weather-text text-light">{weather.city}</small>
        <p></p>
        <small className="weather-text text-light">{weather.desc}</small>
      </div>
    </div>
  );
};
export { Weather };
