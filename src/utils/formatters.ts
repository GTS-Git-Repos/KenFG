import jwt_decode from 'jwt-decode';
import {intervalToDuration} from 'date-fns';

export const decodeJwt = (jwt: string) => {
  try {
    const token = jwt_decode(jwt);
    return token;
  } catch (err) {
    return false;
  }
};

export const getCountDown = (inputDate: Date) => {
  // console.log('NEED TO MOVE COMMAN UTILS');
  try {
    const countDown = intervalToDuration({
      start: inputDate,
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
