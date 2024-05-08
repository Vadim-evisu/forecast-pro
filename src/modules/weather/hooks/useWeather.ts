import { useLocation } from '@/context/LocationContext';
import { apiRepository } from '@/repositories';
import { useEffect, useMemo, useState } from 'react';
import type { IWeatherDataCurrent } from '../type';

const weatherRepository = apiRepository.weather;
const minLenth = 3;

const useWeather = () => {
  const [ currentWeather, setCurrentWeather ] = 
    useState<IWeatherDataCurrent>();

  const currentLocation = useLocation();
  const destination = useMemo(() => ({
    lat: currentLocation.lat,
    lon: currentLocation.lon }),
  [ currentLocation ]);

  
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = 
          await weatherRepository.getWeatherCurrent(destination);
        setCurrentWeather(response);
      } catch (error) {
        console.log(error);
      }
    };

    if (currentLocation.name.length > minLenth) {
      getWeather();
    }
  }, [ currentLocation, destination ]);
  return { currentWeather, currentLocation };
};

export { useWeather };