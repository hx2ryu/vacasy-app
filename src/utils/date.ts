// export function getDateString(dateStr: string) {
//   const splittedDate = dateStr.split('/');
//   if (splittedDate.length > 2) {
//     return {
//       year: splittedDate[2],
//       month: getMonth(splittedDate[0]),
//       date: splittedDate[1],
//     };
//   } else {
//     return undefined;
//   }
// }

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

const MONTH_NUM_TO_STR: Pick<string, number> = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

export type DateStringInfo = {
  year: string;
  month: string;
  date: string;
};
export function getDateString(inputDate: string): DateStringInfo {
  const convertedDate = new Date(inputDate);
  return {
    year: convertedDate.getFullYear().toString(),
    month: MONTH_NUM_TO_STR[convertedDate.getMonth()],
    date: convertedDate.getDate().toString(),
  };
}

export function getElapsedTimeString(inputDate: string) {
  try {
    const covertedDate = new Date(inputDate);
    const inputTime = covertedDate.getTime();
    const currentTime = new Date().getTime();
    const hours = (currentTime - inputTime) / 3600000;

    if (hours < 24) {
      return `${Math.floor(hours)}h ago`;
    }
    if (hours < 24 * 7) {
      return `${Math.floor(hours / 24)}d ago`;
    }
    if (hours < 24 * 30) {
      return `${Math.floor(hours / 24 / 7)}w ago`;
    }
    return `${
      MONTH_NUM_TO_STR[covertedDate.getMonth()]
    } ${covertedDate.getDate()}, ${covertedDate.getFullYear()}`;
  } catch {
    return undefined;
  }
}

// export function compareISOString(operand1: string, operand2: string) {
//   try {
//     const alpha = new Date(operand1);
//     const beta = new Date(operand2);
//     const alphaTime = alpha.getTime().toString();
//     const betaTime = beta.getTime().toString();

//     return alphaTime.localeCompare(betaTime);
//   } catch {
//     return 0;
//   }
// }
