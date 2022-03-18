import {useQuery} from 'react-query';
import {
  compareTeamsRemote,
  getMatchPointsRemote,
  joinedMatchesRemote,
  matchScoreStatRemote,
} from '../remote/matchesRemote';

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

export const useMatchPlayersState = (
  match_key: string,
  user_id: string,
  enabled: boolean,
) => {
  const {
    data: mpMeta,
    isLoading: mpL,
    isSuccess: mpS,
    isError: mpE,
    refetch: mpRefetch,
  } = useQuery(['match', match_key, user_id], getMatchPointsRemote, {
    notifyOnChangeProps: ['data', 'isLoading', 'isFetching', 'isError'],
    enabled: true,
    // staleTime: 1000 * 1000,
  });
  return {mpMeta, mpL, mpS, mpE, mpRefetch};
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
    cacheTime: 0,
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
