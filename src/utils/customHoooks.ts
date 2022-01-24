import {useState, useEffect, useRef} from 'react';
import {InteractionManager} from 'react-native';
import {differenceInSeconds, intervalToDuration} from 'date-fns';

export function useIsScreenReady() {
  const [screenReady, setScreenReady] = useState(false);
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setScreenReady(true);
    });
  }, []);
  return screenReady;
}

export function useRenderCount(screenname?: string) {
  const renderCount = useRef(1);
  console.log(`${screenname} renders ${renderCount.current++}`);
  return 1;
}

export function useCountDown(inputDate: Date, seconds_update: boolean) {
  // const [timeStamp, setTimeStamp] = useState('00h:00m:00s');
  // let isMounted = useRef().current;
  try {
    const countDown: any = intervalToDuration({
      start: inputDate,
      end: new Date(),
    });
    const hour = countDown.hours > 10 ? countDown.hours : `0${countDown.hours}`;
    const minutes =
      countDown.minutes > 10 ? countDown.minutes : `0${countDown.minutes}`;
    const seconds =
      countDown.seconds > 10 ? countDown.seconds : `0${countDown.seconds}`;
    if (seconds_update) {
      const timeString = `${hour}h ${minutes}m ${seconds}`;
      return timeString;
    } else {
      const timeString = `${hour}h ${minutes}m`;
      return timeString;
    }
  } catch (err) {
    // console.log('useCountDown', err);
    return '00h:00m:00s';
  }
}
