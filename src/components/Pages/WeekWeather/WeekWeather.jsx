import { useState, useEffect } from "react";
import {
  getWeekWeather,
  getGeoWeatherWeek,
} from "../../../services/ApiServices";
import SearchForm from "../../SearchForm";
import { WeekWeatherContainer, ClearMessage } from "./WeekWeather.styled";
import PropTypes from "prop-types";

const WeekWeather = ({ place, setPlace }) => {
  const [weekWeather, setWeekWeather] = useState(null);
  const [placeName, setPlaceName] = useState("");
  useEffect(() => {
    if (!place) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        getGeoWeatherWeek(coords.latitude, coords.longitude).then((value) => {
          setPlaceName(value.city.name);
          const writeWeekWeather = value.list.filter(
            (value) =>
              new Date(value.dt * 1000).toLocaleTimeString().substr(0, 2) ===
              "15"
          );
          setWeekWeather(writeWeekWeather);
        });
      });
      return;
    }

    getWeekWeather(place)
      .then((value) => {
        if (typeof value === "string") {
          return setPlace("");
        }
        setPlaceName(value.city.name);
        const writeWeekWeather = value.list.filter(
          (value) =>
            new Date(value.dt * 1000).toLocaleTimeString().substr(0, 2) === "15"
        );
        setWeekWeather(writeWeekWeather);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place]);

  return (
    <>
      <SearchForm setPlace={setPlace} />

      <WeekWeatherContainer>
        {placeName && <h2>{placeName}</h2>}
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
                  <p>{Math.round(value.main.temp)} °C</p>
                  <p>{value.weather[0].main}</p>
                </li>
              );
            })
          ) : (
            <ClearMessage>
              Provide access to your geolocation or enter a city name
            </ClearMessage>
          )}
        </ul>
      </WeekWeatherContainer>
    </>
  );
};

export default WeekWeather;

WeekWeather.protoTypes = {
  place: PropTypes.string,
  setPlace: PropTypes.func.isRequired,
};

