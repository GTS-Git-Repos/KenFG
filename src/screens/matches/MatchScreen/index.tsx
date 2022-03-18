/**
 *   live match screen, list all the contests and teams created by user of the match
 *  it's possible the user can open that screen without joining any contest, or teams
 *  */

import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  useMatchPlayersState,
  useMatchScoreStat,
} from '../../../shared_hooks/match.hooks';
import MatchScreen from './match.screen';
import {toContestMatch} from '../../../navigations/match.links';
import {useDispatch, useSelector} from 'react-redux';
import {FullScreenLoading, MatchScoreError} from '../../../sharedComponents';
import {updateMatchMetaAction} from '../../../store/actions/match.actions';
import {userInfo} from '../../../store/selectors';
import {
  matchLoadingSelector,
  matchMetaSelector,
} from '../../../store/selectors/match.selectors';

export default function MatchScreenHOC() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {match_key}: any = route.params;

  const userMeta = useSelector(userInfo);
  const matchMeta = useSelector(matchMetaSelector);
  const loading = useSelector(matchLoadingSelector);

  const {msMeta, msE, msMetaRf} = useMatchScoreStat(match_key, userMeta);

  useEffect(() => {
    if (msMeta) {
      dispatch(updateMatchMetaAction(msMeta));
    }
  }, [msMeta]);

  useEffect(() => {
    // console.log(matchMeta);
  }, []);

  function onContestCardPress(contest_key: string) {
    toContestMatch(navigation, match_key, contest_key);
  }

  if (loading) {
    return <FullScreenLoading title={''} />;
  }
  if (msE || !matchMeta) {
    return <MatchScoreError refetch={msMetaRf} />;
  }

  // return null;

  return (
    <MatchScreen
      matchMeta={matchMeta}
      contests={[]}
      teams={[]}
      commentry={[]}
      onContestCardPress={onContestCardPress}
    />
  );
}
