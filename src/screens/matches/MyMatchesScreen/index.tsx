import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {LoadingSpinner} from '../../../sharedComponents';
import {useIsScreenReady} from '../../../utils/customHoooks';
import MyMatchesScreen from './my.matches.screen';
import {useMatches} from './mymatches.workers';
import {useNavigation} from '@react-navigation/core';
import {updateSelectedMatchAction} from '../../../store/actions/appActions';
const log = console.log;

export default function MyMatchesScreenHOC() {
  const pagerRef = useRef();
  const dispatch = useDispatch();
  const isScreenReady = useIsScreenReady();
  const userMeta = useSelector(userInfo);
  const navigation = useNavigation<any>();

  const [status, setStatus] = useState('notstarted');

  const {matches, matchesAPI} = useMatches(userMeta.mobile, status);

  useEffect(() => {
    if (matches) {
      // log(JSON.stringify(matches));
    }
  }, [matches]);

  if (!isScreenReady) {
    return <LoadingSpinner title={'My Matches'} />;
  }

  const onPressMyMatchCard = (match_key: string) => {
    const matchMeta = matches.find((item: any) => item.key === match_key);
    if (matchMeta.status === 'notstarted') {
      dispatch(
        updateSelectedMatchAction({
          match_key: matchMeta.key,
          name: matchMeta.teams.tournament.short_name,
          team_a: matchMeta.teams.a.code,
          team_b: matchMeta.teams.b.code,
          start_at: matchMeta.start_at,
        }),
      );
      navigation.navigate('Contest');
    }
    if (matchMeta.status === 'completed') {
      navigation.navigate('ContestsLiveMatchScreen', {
        match_key: match_key,
      });
      return;
    }
    console.log(matchMeta);
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
