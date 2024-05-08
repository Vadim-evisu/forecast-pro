import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import TimeInfo from '../components/TimeInfo';
import { getCurrentTimeByZone } from '../utils/time';

describe('TimeInfo', () => {
  describe(':prop:timeData', () => {
    it('should render Current date & time', () => {
      const mockedTime = {
        timezone: 'Europe/Kiev',
        timezone_offset: 10800,
        sunrise: 1714962226,
        sunset: 1715016312
      };

      const currentTime = getCurrentTimeByZone(mockedTime.timezone);

      render(<TimeInfo {...mockedTime} />);
      const timeSocket = screen.getByTestId('time-socket');

      
      expect(timeSocket).toBeInTheDocument();
      expect(timeSocket).toHaveTextContent(currentTime);
      
      // screen.debug();
    });
  });
});