interface IWeatherData {
  'lat': number,
  'lon': number,
  'timezone': string,
  'timezone_offset': number,
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IWeatherCurrent {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeather[];
}

interface IWeatherDataCurrent extends IWeatherData {
  current: IWeatherCurrent
}

interface ITime {
  timezone: IWeatherData['timezone'],
  timezone_offset: IWeatherData['timezone_offset'],
  sunrise: IWeatherCurrent['sunrise'],
  sunset: IWeatherCurrent['sunset']
}

type ICurrentWeatherCard = {
  name: string;
  temperature: number;
  weather: IWeatherCurrent['weather'],
  timeInfo: ITime
};

export type { IWeatherDataCurrent, ICurrentWeatherCard, IWeather, ITime };