/**
 * by selecting one joined contests from match screen
 * */
import React, {useEffect} from 'react';
import ContestMatchScreen from './contest.match.screen';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {
  matchContestsSelector,
  matchLoadingSelector,
  matchMetaSelector,
  matchPlayerPoints,
  userTeamsInMatchSelector,
} from '../../../store/selectors/match.selectors';
import {
  useMatchPlayersPointsState,
  useMatchScoreStat,
  useUserMatchContests,
  useUserTeamsInMatch,
} from '../../../shared_hooks/match.hooks';
import {toCompareTeamScreen} from '../../../store/actions/navigationActions';
import {FullScreenLoading, MatchScoreError} from '../../../sharedComponents';

export default function ContestMatchHOC() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const {match_key, contest_key} = route.params;
  console.log(contest_key);
  

  const userMeta = useSelector(userInfo);
  const matchMeta = useSelector(matchMetaSelector);
  const contests = useSelector(matchContestsSelector);
  const teams = useSelector(userTeamsInMatchSelector);
  const players = useSelector(matchPlayerPoints);
  const loading = useSelector(matchLoadingSelector);

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

  function onPressCompareTeam(opTeam: string) {
    toCompareTeamScreen(navigation);
  }

  // return null;
  if (loading) {
    return <FullScreenLoading title={''} />;
  }
  if (msE || !matchMeta) {
    return <MatchScoreError refetch={msMetaRf} />;
  }

  return (
    <ContestMatchScreen
      matchMeta={matchMeta}
      contest={null}
      leaderBoard={null}
      commentary={null}
      players={players}
      onPressCompareTeam={onPressCompareTeam}
    />
  );
}
