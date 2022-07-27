import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://api.openweathermap.org";

const API_KEY = "c2cfcaec353eab319cf3fc9fe3e78d97";

export const getTodayWeather = async (city) => {
  try {
    const { data } = await axios.get(
      `/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
    );
    return data;
  } catch (error) {
    toast.error("Please enter a valid city", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    return error.message;
  }
};

export const getWeekWeather = async (city) => {
  try {
    const { data } = await axios.get(
      `/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    return data;
  } catch (error) {
    toast.error("Please enter a valid city", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    return error;
  }
};

export const getGeolocationWeather = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`
    );
    return data;
  } catch (error) {
    toast.error("Please enter a valid city", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    return error;
  }
};

export const getGeoWeatherWeek = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    return data;
  } catch (error) {
    toast.error("Please enter a valid city", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    return error;
  }
};
