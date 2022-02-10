import {intervalToDuration} from 'date-fns';
import {useEffect, useRef, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {InteractionManager} from 'react-native';

export function useIsScreenReady() {
  const [screenReady, setScreenReady] = useState(false);
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setScreenReady(true);
    });
  }, []);
  return screenReady;
}

export function useCountDown(inputDate: Date) {
  // const [timeStamp, setTimeStamp] = useState('00h:00m:00s');
  let isMounted: any = useRef().current;
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

    useEffect(() => {
      let timer;
      if (hour < 1) {
        if (isMounted) {
          //   timer = setInterval(() => {
          //     console.log('hello');
          //   }, 1000);
        }
      }
      return () => {
        isMounted = false;
      };
    }, []);
  } catch (err) {
    // console.log('useCountDown', err);
    return '';
  }
}

export function useImageUpload() {
  async function openLibrary() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }
  return {openLibrary};
}
