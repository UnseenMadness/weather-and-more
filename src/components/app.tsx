import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WeatherComponent } from "./weather";
import { HomePage } from "./home";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<WeatherComponent />} />
          <Route path="weather" element={<WeatherComponent />} />
          <Route path="beers" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
