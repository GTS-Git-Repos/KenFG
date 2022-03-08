import {useQuery} from 'react-query';
import {
  compareTeamsRemote,
  getMatchPointsRemote,
  liveMatchMetaRemote,
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

// match score from third party api
export const useMatchScore = (match_key: string, user_id: string) => {
  const {
    data: msMeta,
    isLoading: msL,
    isSuccess: msS,
    isFetching: msF,
    isError: msE,
    refetch: msRefetch,
  } = useQuery(['match', match_key, user_id], liveMatchMetaRemote, {
    notifyOnChangeProps: [
      'data',
      'isLoading',
      'isSuccess',
      'isFetching',
      'isError',
    ],
  });
  return {msMeta, msL, msS, msF, msE, msRefetch};
};
