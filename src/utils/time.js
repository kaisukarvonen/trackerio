export const getTime = (duration, showEmpty) => {
  const hours = duration.hours ? `${duration.hours} h` : showEmpty ? '0 h' : '';
  const minutes = duration.minutes ? `${duration.minutes} m` : showEmpty ? '0 m' : '';
  return `${hours} ${minutes}`;
};
