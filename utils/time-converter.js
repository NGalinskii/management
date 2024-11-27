export function timeConverter(isoTime) {
  const currentTime = new Date().getTime();
  const pastTime = new Date(isoTime).getTime();
  const timeDifference = currentTime - pastTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} секунд назад`;
  } else if (minutes < 60) {
    return `${minutes} минут назад`;
  } else if (hours < 24) {
    return `${hours} часов назад`;
  } else if (days < 30) {
    return `${days} дней назад`;
  } else if (months < 12) {
    return `${months} месяцев назад`;
  } else {
    return `${years} год назад`;
  }
}
