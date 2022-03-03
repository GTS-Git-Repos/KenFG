// safe to delete that file

import {intervalToDuration} from 'date-fns';

export const __DEPRECATED_getCountDown = (inputDate: Date): string => {
  try {
    const id = new Date(inputDate);
    const countDown = intervalToDuration({
      start: id,
      end: new Date(),
    });
    let timeString = `${countDown.hours}h:${countDown.minutes}:${
      countDown.seconds < 10 ? `0${countDown.seconds}` : countDown.seconds
    }`;
    return timeString;
  } catch (err) {
    return '00:00:00';
  }
};
