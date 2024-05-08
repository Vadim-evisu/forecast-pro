const getCurrentTimeByZone = (timeZone: string) => {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: timeZone
  }).format(new Date());
};

const getDateBySeconds = (
  { seconds, timeZone }:
  { seconds: number, timeZone: string }) => {
  const milliseconds = seconds * 1000;
  return new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'short',
    timeZone: timeZone
  }).format(new Date(milliseconds));
};

export { getCurrentTimeByZone, getDateBySeconds };