import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {
  compareTeamsRemote,
  getMatchPlayerPointsRemote,
  joinedMatchesRemote,
  matchScoreStatRemote,
  userMatchContestsRemote,
} from '../remote/matchesRemote';
import {updateMatchConetstsAction, updatePlayerPointsAction} from '../store/actions/match.actions';

export const useMatchPlayersPointsState = (
  match_key: string,
  // user_id: string,
  action?: (data: any) => void,
) => {
  const {
    data: mpPoints,
    isLoading: mpL,
    isSuccess: mpS,
    isError: mpE,
    refetch: mpRefetch,
  } = useQuery(['match', match_key,], getMatchPlayerPointsRemote, {
    notifyOnChangeProps: ['data', 'isLoading', 'isFetching', 'isError'],
    // staleTime: 1000 * 1000,
  });

  useEffect(() => {
    if (mpPoints && action) {
      action(updatePlayerPointsAction(mpPoints));
    }
  }, [mpPoints]);

  return {mpPoints, mpL, mpS, mpE, mpRefetch};
};

// match score and state from third party api
export const useMatchScoreStat = (match_key: string, user_id: string) => {
  const {
    data: msMeta,
    isLoading: msL,
    isSuccess: msS,
    isFetching: msF,
    isError: msE,
    refetch: msMetaRf,
  } = useQuery(['match', match_key, user_id], matchScoreStatRemote, {
    notifyOnChangeProps: [
      'data',
      'isLoading',
      'isSuccess',
      'isFetching',
      'isError',
    ],
    // cacheTime: 0,
    staleTime: 1000 * 1000,

  });
  return {msMeta, msL, msS, msF, msE, msMetaRf};
};

export const useGetUserMatches = (user_id: string, status: string) => {
  const {
    data: matches,
    isLoading: matches_l,
    isError: matches_e,
  } = useQuery(['user_matches', user_id, status], joinedMatchesRemote, {
    notifyOnChangeProps: ['data', 'isLoading', 'isError'],
  });
  return {matches, matches_l, matches_e};
};

export const useUserMatchContests = (
  match_key: string,
  player_key: string,
  action?: (data: any) => void,
) => {
  const {
    data: u_contests,
    isLoading: u_c_l,
    isError: u_c_e,
    refetch: u_c_rf,
  } = useQuery(
    ['user_match_contests', match_key, player_key],
    userMatchContestsRemote,
    {
      notifyOnChangeProps: ['data', 'isLoading', 'isError'],
    staleTime: 1000 * 1000,

    },
  );
  // dispatch to redux
  useEffect(() => {
    if (u_contests && action) {
      action(updateMatchConetstsAction(u_contests));
    }
  }, [u_contests]);

  return {u_contests, u_c_l, u_c_e, u_c_rf};
};

export const useCompareTeams = (match_key: string, user_id: string) => {
  const {
    data: compareMeta,
    isSuccess: compareAPI,
    refetch: refetchMatch,
  } = useQuery(['match', 'wieng_2022_t20_03', user_id], compareTeamsRemote, {
    notifyOnChangeProps: ['data', 'isSuccess'],
    // staleTime: 1000 * 1000,
  });
  return {compareMeta, compareAPI, refetchMatch};
};
