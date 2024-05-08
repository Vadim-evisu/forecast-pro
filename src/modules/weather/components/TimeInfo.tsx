import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import type { ITime } from '../type';
import { getCurrentTimeByZone, getDateBySeconds } from '../utils/time';

function TimeInfo(timeData: ITime) {
  const sunriseData = {
    icon: SunIcon,
    timeZone: timeData.timezone,
    seconds: timeData.sunrise,
    label: 'Sunrise'
  };
  const sunsetData = {
    icon: MoonIcon,
    timeZone: timeData.timezone,
    seconds: timeData.sunset,
    label: 'Sunset'
  };

  return (
    <div className='flex flex-col items-center gap-y-1'>
      <p className='text-black dark:text-white' data-testid='time-socket'>
        {getCurrentTimeByZone(timeData.timezone)}
      </p>
      <SunInfo {...sunriseData} />
      <SunInfo {...sunsetData} />
    </div>
  );
}

type IIconType = typeof MoonIcon;

type ISunProps = {
  icon: IIconType,
  timeZone: string,
  seconds: number,
  label: string
};

function SunInfo(props: ISunProps) {
  const Icon = props.icon;

  return (
    <div className="flex gap-2 items-center">
      <Icon title={props.label}
      className="h-6 max-w-full text-black dark:text-white"/>
      <p className='text-black dark:text-white'>
        {props.label}: {getDateBySeconds({
          seconds: props.seconds,
          timeZone: props.timeZone
        })}</p>
    </div>
  );
}

export default TimeInfo;
