import { useState, useEffect } from "react";
import { getWeekWeather } from "../../../services/ApiServices";
import SearchForm from "../../SearchForm";

const WeekWeather = ({ place, setPlace }) => {
  const [weekWeather, setWeekWeather] = useState(null);
  useEffect(() => {
    if (!place) return;

    getWeekWeather(place)
      .then((value) => {
        if (typeof value !== "string") {
          const writeWeekWeather = value.list.filter(
            (value) =>
              new Date(value.dt * 1000).toLocaleTimeString().substr(0, 2) ===
              "15"
          );
          setWeekWeather(writeWeekWeather);
        }
      })
      .catch((error) => console.log(error));
  }, [place]);

  return (
    <>
      <SearchForm setPlace={setPlace} />
      <ul>
        {weekWeather ? (
          weekWeather.map((value) => {
            return (
              <li key={value.dt}>
                <p>
                  {new Date(value.dt * 1000).toLocaleString("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}
                  alt="icon"
                />
                <p>{Math.round(value.main.temp)}</p>
                <p>{value.weather[0].main}</p>
              </li>
            );
          })
        ) : (
          <p>Enter the city</p>
        )}
      </ul>
    </>
  );
};

export default WeekWeather;
