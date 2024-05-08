import type {
  IWeatherDataCurrent,
  ICurrentWeatherCard,
} from '../type';

import type { ILocation } from '@/modules/location';

const prepareWeatherCardData = 
(data: IWeatherDataCurrent, location: ILocation): ICurrentWeatherCard => {
  return {
    temperature: Math.round(data.current.temp),
    name: location.name,
    weather: data.current.weather,
    timeInfo: {
      timezone: data.timezone,
      timezone_offset: data.timezone_offset,
      sunrise: data.current.sunrise,
      sunset: data.current.sunset,
    }
  };
};

export { prepareWeatherCardData };