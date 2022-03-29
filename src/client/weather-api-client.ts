import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type ExcludeType = "current" | "minutely" | "hourly" | "daily" | "alerts";
type UnitType = "standard" | "metric" | "imperial";

export interface WeatherData {
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: {
      description: string;
      icon: string;
      id: number;
      main: string;
    }[];
    wind_deg: number;
    wind_speed: number;
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
  };
}

export class WeatherApiClient {
  private appKey = "3419dffd5b386c04d83e6afec64e8e32";

  constructor() {}

  public async getCurrentAndForcastWeatherData(
    location: GeolocationPosition,
    excludes: ExcludeType[],
    units: UnitType
  ): Promise<WeatherData> {
    const requestConfig: AxiosRequestConfig = {
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${
        location.coords.latitude
      }&lon=${location.coords.longitude}&units=${units}&exclude=${excludes.join(
        ","
      )}&appid=${this.appKey}&lang=ru`,
      method: "GET",
      responseType: "json",
    };
    const response = await axios(requestConfig);
    return response.data;
  }
}
