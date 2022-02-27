import React, {useEffect, useRef, useState} from 'react';
import tailwind from '../../../../../tailwind';
import {TouchableOpacity, StyleSheet} from 'react-native';
import MyMatchesTop from '../atoms/my.matches.top';
import Teams from '../atoms/my.matches.teams';
import SlideAddMyMatchCard from '../atoms/SlideAddMyMatchCard';
import {useNavigation} from '@react-navigation/core';
const log = console.log;
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';
import {useSelector} from 'react-redux';

interface PropTypes {
  match_key: string;
  team_a: any;
  team_b: any;
  tournament_name: string;
  start_time: Date;
  teamCount: any;
  contestCount: any;
  status: string;
  onPressMyMatchCard(match_key: string): any;
}

export default function MyMatchesCard(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  const navigation = useNavigation<any>();
  const isMounted = useRef(true);

  const [countDown, setCountDown] = useState<any>('00:00:00');

  useEffect(() => {
    let interval: any = null;
    try {
      if (isMounted.current) {
        // count down logic
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
      style={[ss.root, dT ? clr.bgd2 : clr.bgw]}>
      <MyMatchesTop
        dT={dT}
        tournament_name={props.tournament_name}
        teamCount={props.teamCount}
        contestCount={props.contestCount}
      />
      <Teams
        dT={dT}
        countDown={countDown}
        team_a={props.team_a}
        team_b={props.team_b}
        status={props.status}
      />
      <SlideAddMyMatchCard dT={dT} />
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  root: {
    borderRadius: 4,
    elevation: 2,
  },
});
