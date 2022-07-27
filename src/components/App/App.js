import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import TodayWeather from "../Pages/TodayWeather";
import WeekWeather from "../Pages/WeekWeather";
import ErrorPage from "../Pages/ErrorPage";
import { useState } from "react";
import { Container } from "./App.styled";

function App() {
  const [place, setPlace] = useState("");
  return (
    <Container>
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
    </Container>
  );
}

export default App;
