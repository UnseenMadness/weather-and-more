import * as React from "react";
import { useEffect, useState } from "react";
import { WeatherApiClient } from "../client/weather-api-client";
import Spin from "antd/lib/spin";
import Card from "antd/lib/card";
import Meta from "antd/lib/card/Meta";

export const WeatherComponent: React.FC = () => {
  const [userLocation, setUserLocation] = useState<GeolocationPosition>();
  const [currentWeather, setCurrentWeather] = useState(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setUserLocation(position)
    );
  }, []);

  useEffect(() => {
    if (userLocation?.coords?.latitude && userLocation?.coords?.longitude) {
      const weatherClient = new WeatherApiClient();
      weatherClient
        .getCurrentAndForcastWeatherData(
          userLocation,
          ["minutely", "daily", "hourly", "alerts"],
          "metric"
        )
        .then((data) => setCurrentWeather(data));
    }
  }, [userLocation]);

  return (
    <div style={{ width: "300px" }}>
      {!currentWeather ? (
        <Spin tip="Loading..." />
      ) : (
        <Card
          cover={
            <img
              src={`http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`}
            />
          }
        >
          <Meta
            title={`${parseInt(currentWeather.current.temp)} ℃`}
            description={`${
              currentWeather.current.weather[0].description
            }, ощущается как ${parseInt(
              currentWeather.current.feels_like
            )} ℃. Ветер ${currentWeather.current.wind_speed} м/с`}
          />
        </Card>
      )}
    </div>
  );
};
