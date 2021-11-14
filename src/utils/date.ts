export function getDateString(date: Date) {
  return {
    year: date.getFullYear(),
    month: getMonth(date),
    date: date.getDate(),
  };
//   return `${date.getDate()}, ${getMonth(date)} ${date.getFullYear()}`;
}

export function getTime(date: Date) {
  return `${date.getHours()}:${date.getMinutes()}`;
}

export function getDayOfTheWeek(date: Date) {
  let rtnValue: string;
  switch (date.getDay()) {
    case 0:
    default:
      rtnValue = 'Sunday';
      break;
    case 1:
      rtnValue = 'Monday';
      break;
    case 2:
      rtnValue = 'Tuesday';
      break;
    case 3:
      rtnValue = 'Wednesday';
      break;
    case 4:
      rtnValue = 'Thursday';
      break;
    case 5:
      rtnValue = 'Friday';
      break;
    case 6:
      rtnValue = 'Saturday';
      break;
  }
  return rtnValue;
}

export function getMonth(date: Date) {
  let rtnValue: string;
  switch (date.getMonth()) {
    case 0:
    default:
      rtnValue = 'Jan';
      break;
    case 1:
      rtnValue = 'Feb';
      break;
    case 2:
      rtnValue = 'Mar';
      break;
    case 3:
      rtnValue = 'Apr';
      break;
    case 4:
      rtnValue = 'May';
      break;
    case 5:
      rtnValue = 'Jun';
      break;
    case 6:
      rtnValue = 'Jul';
      break;
    case 7:
      rtnValue = 'Aug';
      break;
    case 8:
      rtnValue = 'Sep';
      break;
    case 9:
      rtnValue = 'Oct';
      break;
    case 10:
      rtnValue = 'Nov';
      break;
    case 11:
      rtnValue = 'Dec';
      break;
  }
  return rtnValue;
}
