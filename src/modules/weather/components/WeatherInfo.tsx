import { useEffect, useState } from 'react';
import type { IWeather } from '../type';

const getWetherIconByCode = (code: string) => {
  const url = import.meta.env.VITE_ICON_URL;
  return `${url}img/wn/${code}@2x.png`;
};

function WeatherInfo(weatherData: IWeather) {
  const [ iconPath, setIconPath ] = useState('');

  useEffect(() => {
    const getIcon = () => {
      try {
        const response = getWetherIconByCode(weatherData.icon);
        setIconPath(response);
      } catch (error) {
        console.log(error);
      }
    };
    getIcon();
  }, [ weatherData.icon ]);

  return (
    <div className='flex
    flex-col items-center border-2 border-gray p-4 rounded-md bg-gray/50'>
      <img
        width="64"
        height="64"
        className='h-[64px] w-[64px] object-containt'
        src={iconPath}
        alt={weatherData.main}
      />
      <p className='text-black dark:text-white'>{weatherData.description}</p>
    </div>
  );
}

export default WeatherInfo;