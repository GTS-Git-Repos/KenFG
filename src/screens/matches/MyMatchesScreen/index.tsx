import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isFulMatchSelector, userInfo} from '../../../store/selectors';
import {LoadingSpinner} from '../../../sharedComponents';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import MyMatchesScreen from './my.matches.screen';
import {useMatches} from './mymatches.workers';
import {useNavigation} from '@react-navigation/core';
import {
  navigateMatchContestsAction,
  toContestLiveMatch,
} from '../../../store/actions/navigationActions';
import {updateFullMatchAction} from '../../../store/actions/appActions';
const log = console.log;

export default function MyMatchesScreenHOC() {
  const pagerRef = useRef();
  const isScreenReady = useIsScreenReady();
  const dispatch = useDispatch();

  const userMeta = useSelector(userInfo);
  const isFullMatch: boolean = useSelector(isFulMatchSelector);

  const navigation = useNavigation<any>();

  const [isCricket, setIsCricket] = useState(true);

  const [status, setStatus] = useState('notstarted');

  const {matches, matchesAPI}: any = useMatches(userMeta.mobile, status);

  useEffect(() => {
    if (matches) {
      // log(JSON.stringify(matches));
    }
  }, [matches]);

  function onPressMatchType(match_type: number): any {
    dispatch(updateFullMatchAction(match_type === 1 ? true : false));
  }

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
      isCricket={isCricket}
      setIsCricket={setIsCricket}
      onPressMyMatchCard={onPressMyMatchCard}
      onPressMatchType={onPressMatchType}
      isFullMatch={isFullMatch}
    />
  );
}
