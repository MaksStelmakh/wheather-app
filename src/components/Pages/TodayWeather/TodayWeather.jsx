import SearchForm from "../../SearchForm";
import { useState, useEffect } from "react";
import { getTodayWeather } from "../../../services/ApiServices";

const TodayWeather = ({ place, setPlace }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!place) return;
    getTodayWeather(place)
      .then((value) => setWeather(value))
      .catch((error) => console.log("er"));
  }, [place]);

  return (
    <>
      <SearchForm setPlace={setPlace} />
      {typeof weather === "object" && weather !== null ? (
        <div>
          <div>
            <h2>{weather.name}</h2>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="icon"
            />
          </div>
          <p>
            {new Date(weather.dt * 1000).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
          <p>{Math.round(weather.main.temp)} °C</p>
          <p>feels like</p>
          <p>{Math.round(weather.main.feels_like)} °C</p>
          <p>{weather.weather[0].main}</p>
        </div>
      ) : (
        <p>Enter the city</p>
      )}
    </>
  );
};

export default TodayWeather;
