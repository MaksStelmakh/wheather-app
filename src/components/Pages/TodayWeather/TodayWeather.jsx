import SearchForm from "../../SearchForm";
import { useState, useEffect } from "react";
import {
  getTodayWeather,
  getGeolocationWeather,
} from "../../../services/ApiServices";
import {
  WeatherContainer,
  MainInfo,
  ClearMessage,
} from "./TodayWhrather.styled";
import PropTypes from "prop-types";

const TodayWeather = ({ place, setPlace }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!place) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        getGeolocationWeather(coords.latitude, coords.longitude).then((value) =>
          setWeather(value)
        );
      });
      return;
    }
    getTodayWeather(place)
      .then((value) => {
        if (typeof value === "string") {
          return setPlace("");
        }
        setWeather(value);
      })
      .catch((error) => console.log("er"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place]);

  return (
    <>
      <SearchForm setPlace={setPlace} />
      <WeatherContainer>
        {typeof weather === "object" && weather !== null ? (
          <div>
            <MainInfo>
              <h2>{weather.name}</h2>
              <p>
                {new Date(weather.dt * 1000).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </p>
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="icon"
                />
                <div>
                  <p>{Math.round(weather.main.temp)} °C</p>
                  <p>Feels like:</p>
                  <p>{Math.round(weather.main.feels_like)} °C</p>
                </div>
              </div>
              <span>{weather.weather[0].main}</span>
            </MainInfo>
          </div>
        ) : (
          <ClearMessage>
            Provide access to your geolocation or enter a city name
          </ClearMessage>
        )}
      </WeatherContainer>
    </>
  );
};

export default TodayWeather;

TodayWeather.protoTypes = {
  place: PropTypes.string,
  setPlace: PropTypes.func.isRequired,
};
