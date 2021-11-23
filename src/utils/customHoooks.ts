import {useState, useEffect, useRef} from 'react';
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

export function useRenderCount(screenname?: string) {
    const renderCount = useRef(1)
    console.log(`${screenname} renders ${renderCount.current++}`)
    return 1
}