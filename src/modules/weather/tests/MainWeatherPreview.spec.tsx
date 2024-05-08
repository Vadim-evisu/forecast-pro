import { expect, describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import MainWeatherPreview from '../templates/MainWeatherPreview';
import * as useWeather from '../hooks/useWeather';

describe('MainWeatherPreview', () => {
  const useWeatherSpy = vi.spyOn(useWeather, 'useWeather');
  it('should render location if data provided', () => {
    const mockedCurrentWeather = {
      'lat': 50.45,
      'lon': 30.5241,
      'timezone': 'Europe/Kiev',
      'timezone_offset': 10800,
      'current': {
          'dt': 1715075512,
          'sunrise': 1715048527,
          'sunset': 1715102804,
          'temp': 18.52,
          'feels_like': 18.36,
          'pressure': 1006,
          'humidity': 74,
          'dew_point': 13.8,
          'uvi': 4.22,
          'clouds': 97,
          'visibility': 10000,
          'wind_speed': 0.45,
          'wind_deg': 168,
          'wind_gust': 2.24,
          'weather': [
              {
                  'id': 804,
                  'main': 'Clouds',
                  'description': 'overcast clouds',
                  'icon': '04d'
              }
          ]
      }
    };
    const mockedLocation = {
      'name': 'Kyiv',
      'lat': 50.4500336,
      'lon': 30.5241361,
      'country': 'UA',
    };

    useWeatherSpy.mockReturnValue({
      currentWeather: mockedCurrentWeather,
      currentLocation: mockedLocation 
    });
    const { container } = render(<MainWeatherPreview />);

    expect(container).toHaveTextContent(/Kyiv/i);
  });

  it('should render empty state if data not provided', () => {
    const mockedCurrentWeather = undefined;
    const mockedLocation = {
      'name': 'Kyiv',
      'lat': 50.4500336,
      'lon': 30.5241361,
      'country': 'UA',
    };

    useWeatherSpy.mockReturnValue({
      currentWeather: mockedCurrentWeather,
      currentLocation: mockedLocation
    });

    const { container } = render(<MainWeatherPreview />);

    expect(container).not.toHaveTextContent(/Kyiv/i);
  });
});