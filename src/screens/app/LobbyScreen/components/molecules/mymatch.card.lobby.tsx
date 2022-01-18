import React, {useEffect, useRef, useState} from 'react';
import tailwind from '../../../../../../tailwind';
import {TouchableOpacity} from 'react-native';
import MyMatchesTop from '../atoms/MyMatches/myMatches.top';
import Teams from '../atoms/MyMatches/Teams';
import SlideAddMyMatchCard from '../atoms/SlideAddMyMatchCard';
import {useNavigation} from '@react-navigation/core';
import {getCountDown} from '../../../../../utils/formatters';
const log = console.log;

interface PropTypes {
  match_key: string;
  team_a: any;
  team_b: any;
  tournament_name: string;
  start_time: Date;
  teamCount: any;
  contestCount: any;
  onPressMyMatchCard(match_key: string): any;
}

export default function MyMatchesCard(props: PropTypes) {
  const navigation = useNavigation<any>();
  const isMounted = useRef(true);

  const [countDown, setCountDown] = useState<any>('00:00:00');

  useEffect(() => {
    let interval: any = null;
    try {
      if (isMounted.current && false) {
        let nextDate = add(new Date(), {days: 2});
        interval = setInterval(() => {
          setCountDown(getCountDown(nextDate));
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
    return () => {
      // log('Unmounted');
      isMounted.current = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        props.onPressMyMatchCard(props.match_key);
      }}
      style={[tailwind('rounded bg-dark-3')]}>
      <MyMatchesTop
        tournament_name={props.tournament_name}
        teamCount={props.teamCount}
        contestCount={props.contestCount}
      />
      <Teams
        countDown={countDown}
        team_a={props.team_a}
        team_b={props.team_b}
      />
      <SlideAddMyMatchCard />
    </TouchableOpacity>
  );
}
