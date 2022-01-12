// The file where comman utilities functins are placed
import {differenceInSeconds, intervalToDuration} from 'date-fns';

export function covertInputTimeStringToDate(inputTime: string) {
  try {
    const splited = inputTime.split(/[- :]/);
    return new Date(
      Date.UTC(
        splited[0],
        splited[1] - 1,
        splited[2],
        splited[3],
        splited[4],
        splited[5],
      ),
    );
  } catch (err) {
    console.log('covertInputTimeStringToDate', err);
    return new Date();
  }
}

export const getCountDown = (inputDate: Date) => {
  try {
    const countDown = intervalToDuration({
      start: inputDate,
      end: new Date(),
    });
    let timeString = `${countDown.hours}h:${countDown.minutes}:${countDown.seconds}`;
    return timeString;
  } catch (err) {
    return '00:00:00';
  }
};

export const isMatchTimeExhausted = (time: any): Boolean => {
  try {
    const seconds = differenceInSeconds(time, new Date());
    if (seconds > 5) {
      return false;
    }
    return true;
  } catch (err) {
    console.log('isMatchTimeExhausted', isMatchTimeExhausted);
    return false;
  }
};

export const isWalletHaveContestAmount = (
  contest_entry: any,
  user_wallet: any,
) => {
  try {
    const neededAmount = parseInt(user_wallet) - parseInt(contest_entry);
    if (neededAmount < 0) {
      return {
        status: false,
        needed: neededAmount,
      };
    } else {
      return {
        status: true,
      };
    }
  } catch (err) {
    return {status: false};
  }
};
