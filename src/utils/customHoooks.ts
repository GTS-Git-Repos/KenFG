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
    // throw 'check later';
    const countDown = intervalToDuration({
      start: inputDate,
      end: new Date(),
    });
    if (seconds_update) {
      const timeString = `${countDown.hours}h ${countDown.minutes}m ${countDown.seconds}s`;
      return timeString;
    } else {
      const timeString = `${countDown.hours}h ${countDown.minutes}m ${countDown.seconds}s`;
      return timeString;
    }
  } catch (err) {
    // console.log('useCountDown', err);
    return '00h:00m:00s';
  }
}
