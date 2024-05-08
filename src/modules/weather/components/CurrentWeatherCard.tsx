import type { ICurrentWeatherCard } from '../type';
import TimeInfo from './TimeInfo';
import WeatherInfo from './WeatherInfo';

function CurrentWeatherCard(currentWeather: ICurrentWeatherCard) {
  const [ weatherInfo ] = currentWeather.weather;
  return (
    <div 
      className="rounded-md p-4 
        desktop:p-8
        bg-white/90 dark:bg-black/20 border-solid border-2 border-gray"
      >
      <div className="
        flex
        flex-col
        desktop:flex-row
        desktop:items-center
        desktop:justify-between
        gap-4"
        >
        <div className="flex justify-center desktop:justify-start">
          <WeatherInfo {...weatherInfo}/>
        </div>
        <div className="text-center desktop:text-left">
          <p className="
            text-2xl
            desktop:text-4xl
            font-bold
            text-black
            dark:text-white
            "
            >
            {currentWeather.temperature}&deg;C
          </p>
          <p
            className="text-xl 
            text-black dark:text-white desktop:text-xl font-medium">
            {currentWeather.name}
          </p>
        </div>
        <TimeInfo {...currentWeather.timeInfo}/>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;