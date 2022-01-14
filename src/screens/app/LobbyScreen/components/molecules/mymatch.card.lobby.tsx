import React, {useEffect, useRef, useState} from 'react';
import tailwind from '../../../../../../tailwind';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  AppState,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TopSection from '../atoms/MyMatches/TopSection';
import Teams from '../atoms/MyMatches/Teams';
import SlideAddMyMatchCard from '../atoms/SlideAddMyMatchCard';
import {useNavigation} from '@react-navigation/core';
import {getCountDown} from '../../../../../utils/formatters';
import {add} from 'date-fns';
const log = console.log;

interface PropTypes {
  text?: string;
}

export default function NewMyMatchesCard(props: PropTypes) {
  const navigation = useNavigation<any>();
  const isMounted = useRef(true);

  const [countDown, setCountDown] = useState<any>('00:00:00');

  useEffect(() => {
    let interval: any = null;
    try {
      if (isMounted.current) {
        let nextDate = add(new Date(), {days: 2});
        interval = setInterval(() => {
          setCountDown(getCountDown(nextDate));
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
    return () => {
      log('Unmounted');
      isMounted.current = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate('ContestsLiveMatchScreen');
      }}
      style={[tailwind('rounded bg-dark-3')]}>
      <TopSection />
      <Teams countDown={countDown} />
      <SlideAddMyMatchCard />
    </TouchableOpacity>
  );
}
