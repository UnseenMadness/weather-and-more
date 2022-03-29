import * as React from "react";
import { useEffect, useState } from "react";

export const WeatherComponent: React.FC = () => {
  const [userLocation, seUserLocation] = useState<GeolocationPosition>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      seUserLocation(position)
    );
  }, []);

  return <div>Current weather</div>;
};
