import CurrentWeatherCard from '../components/CurrentWeatherCard';
import CurrentWeatherCardEmpty from '../components/CurrentWeatherCardEmpty';
import { useWeather } from '../hooks/useWeather';
import { prepareWeatherCardData } from '../utils/weather';

function MainWeatherPreview() {
  const { currentWeather, currentLocation } = useWeather();

  if (!currentWeather) return (
    <div className="w-[min(100%,800px)] mx-auto">
      <CurrentWeatherCardEmpty />
    </div>
  );

  const preparedWeather = 
    prepareWeatherCardData(currentWeather, currentLocation);

  return (
    <div className="w-[min(100%,800px)] mx-auto">
      <CurrentWeatherCard {...preparedWeather}>
      </CurrentWeatherCard>
    </div>
  );
}

export default MainWeatherPreview;