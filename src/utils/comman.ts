// The file where comman utilities functins are placed
import {intervalToDuration} from 'date-fns';

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
