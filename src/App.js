import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TodayWeather from "./components/Pages/TodayWeather";
import WeekWeather from "./components/Pages/WeekWeather";
import ErrorPage from "./components/Pages/ErrorPage";
import { useState } from "react";
import "./App.css";

function App() {
  const [place, setPlace] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="/"
            element={<TodayWeather place={place} setPlace={setPlace} />}
          />
          <Route
            path="/week"
            element={<WeekWeather place={place} setPlace={setPlace} />}
          />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
