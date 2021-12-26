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

export function compareISOString(operand1: string, operand2: string) {
  try {
    const alpha = new Date(operand1);
    const beta = new Date(operand2);
    const alphaTime = alpha.getTime().toString();
    const betaTime = beta.getTime().toString();

    return alphaTime.localeCompare(betaTime);
  } catch {
    return 0;
  }
}
