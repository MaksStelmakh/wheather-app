import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../Layout";
import TodayWeather from "../Pages/TodayWeather";
import WeekWeather from "../Pages/WeekWeather";
import ErrorPage from "../Pages/ErrorPage";
import { useState, useEffect } from "react";
import { Container, TransitionState } from "./App.styled";

function App() {
  const [place, setPlace] = useState("");
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <Container>
      <Layout />
      <TransitionState
        animation={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route
            index
            path="/"
            element={<TodayWeather place={place} setPlace={setPlace} />}
          />
          <Route
            path="/week"
            element={<WeekWeather place={place} setPlace={setPlace} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </TransitionState>
    </Container>
  );
}

export default App;
