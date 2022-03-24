/**
 *   live match screen, list all the contests and teams created by user of the match
 *  it's possible the user can open that screen without joining any contest, or teams
 *  */

import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  useMatchPlayersPointsState,
  useMatchScoreStat,
  useUserMatchContests,
  useUserTeamsInMatch,
} from '../../../shared_hooks/match.hooks';
import {FlatList, StyleSheet} from 'react-native';
import MatchScreen from './match.screen';
import {toContestMatch} from '../../../navigations/match.links';
import {useDispatch, useSelector} from 'react-redux';
import {FullScreenLoading, MatchScoreError} from '../../../sharedComponents';
import {resetToInitialAction} from '../../../store/actions/match.actions';
import {userInfo} from '../../../store/selectors';
import {
  matchContestsSelector,
  matchLoadingSelector,
  matchMetaSelector,
  matchPlayerPoints,
  userTeamsInMatchSelector,
} from '../../../store/selectors/match.selectors';

export default function MatchScreenHOC() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {match_key}: any = route.params;

  const userMeta = useSelector(userInfo);
  const matchMeta = useSelector(matchMetaSelector);
  const contests = useSelector(matchContestsSelector);
  const teams = useSelector(userTeamsInMatchSelector);
  const players = useSelector(matchPlayerPoints);
  const loading = useSelector(matchLoadingSelector);

  useEffect(() => {
    dispatch(resetToInitialAction());
  }, []);

  const {msE, msMetaRf} = useMatchScoreStat(
    match_key,
    userMeta.mobile,
    dispatch,
  );
  const {u_c_l, u_c_e} = useUserMatchContests(
    match_key,
    userMeta.mobile,
    dispatch,
  );
  const {mpL, mpE, mpRf} = useMatchPlayersPointsState(match_key, dispatch);
  const {team_l, team_e, team_rf} = useUserTeamsInMatch(
    match_key,
    userMeta.mobile,
    dispatch,
  );

  useEffect(() => {
    // console.log(teams);
  }, [teams]);

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
      conestsLoading={u_c_l}
      contestsError={u_c_e}
      contests={contests}
      players={players}
      teams={teams}
      commentry={[]}
      onContestCardPress={onContestCardPress}
    />
  );
}

const ss = StyleSheet.create({});
