export function getDateString(dateStr: string) {
  const splittedDate = dateStr.split('/');
  if (splittedDate.length > 2) {
    return {
      year: splittedDate[2],
      month: getMonth(splittedDate[0]),
      date: splittedDate[1],
    };
  } else {
    return undefined;
  }
}

export function extractOnlyDateFromLocaleString(timestamp: string) {
  try {
    return timestamp.split(',')[0];
  } catch {
    return undefined;
  }
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

export function getMonth(month: string) {
  let rtnValue: string;
  switch (month) {
    case '1':
    default:
      rtnValue = 'Jan';
      break;
    case '2':
      rtnValue = 'Feb';
      break;
    case '3':
      rtnValue = 'Mar';
      break;
    case '4':
      rtnValue = 'Apr';
      break;
    case '5':
      rtnValue = 'May';
      break;
    case '6':
      rtnValue = 'Jun';
      break;
    case '7':
      rtnValue = 'Jul';
      break;
    case '8':
      rtnValue = 'Aug';
      break;
    case '8':
      rtnValue = 'Sep';
      break;
    case '10':
      rtnValue = 'Oct';
      break;
    case '11':
      rtnValue = 'Nov';
      break;
    case '12':
      rtnValue = 'Dec';
      break;
  }
  return rtnValue;
}
