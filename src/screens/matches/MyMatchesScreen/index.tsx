import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {LoadingSpinner} from '../../../sharedComponents';
import {useIsScreenReady} from '../../../utils/customHoooks';
import MyMatchesScreen from './my.matches.screen';
import {useMatches} from './mymatches.workers';
import {useNavigation} from '@react-navigation/core';
import {
  navigateMatchContestsAction,
  toContestLiveMatch,
} from '../../../store/actions/navigationActions';
const log = console.log;

export default function MyMatchesScreenHOC() {
  const pagerRef = useRef();
  const isScreenReady = useIsScreenReady();
  const userMeta = useSelector(userInfo);
  const navigation = useNavigation<any>();

  const [status, setStatus] = useState('notstarted');

  const {matches, matchesAPI}: any = useMatches(userMeta.mobile, status);

  useEffect(() => {
    if (matches) {
      // log(JSON.stringify(matches));
    }
  }, [matches]);

  if (!isScreenReady) {
    return <LoadingSpinner title={'My Matches'} />;
  }

  const onPressMyMatchCard = (match_key: string) => {
    const matchMeta: any = matches.find((item: any) => item.key === match_key);
    if (matchMeta.status === 'notstarted') {
      const obj = {
        match_key: matchMeta.key,
        name: matchMeta.teams.tournament.short_name,
        team_a: matchMeta.teams.a.key,
        team_b: matchMeta.teams.b.key,
        team_a_name: matchMeta.teams.a.name,
        team_b_name: matchMeta.teams.b.name,
        start_at: matchMeta.start_at,
      };
      navigateMatchContestsAction(navigation, obj);
    }
    if (matchMeta.status === 'completed') {
      toContestLiveMatch(navigation, matchMeta.key);
      return;
    }
  };

  return (
    <MyMatchesScreen
      pagerRef={pagerRef}
      matches={matches}
      matchesAPI={matchesAPI}
      setStatus={setStatus}
      onPressMyMatchCard={onPressMyMatchCard}
    />
  );
}
