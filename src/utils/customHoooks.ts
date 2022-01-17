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
  const [timeStamp, setTimeStamp] = useState('00h:00m:00s');
  let isMounted = useRef().current;
  const countDown = intervalToDuration({
    start: inputDate,
    end: new Date(),
  });
  if (seconds_update) {
    let timeString = `${countDown.hours}h:${countDown.minutes}:${countDown.seconds}`;
    setTimeStamp(timeString);
  } else {
    let timeString = `${countDown.hours}h:${countDown.minutes}`;
    setTimeStamp(timeString);
  }
  return timeStamp;
}
