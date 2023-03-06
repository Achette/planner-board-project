const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getHour = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hour = hours < 10 ? `0${hours}` : hours;
  const minute = minutes < 10 ? `0${minutes}` : minutes;
  return `${hour}:${minute}`;
};

export const getFullDate = () => {
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const year = date.getFullYear();

  const verifyDay = (day: number | string) => {
    if (day === 1) return `st`;
    if (day === 2) return `nd`;
    if (day === 3) return `rd`;
    return `th`;
  };

  return `${month} ${day}${verifyDay(day)}, ${year}`;
};
