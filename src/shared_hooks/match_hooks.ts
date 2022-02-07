import {useQuery} from 'react-query';
import {
  compareTeamsRemote,
  getMatchPointsRemote,
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

export const usePlayersState = (
  match_key: string,
  user_id: string,
  enabled: boolean,
) => {
  const {
    data: playersStatMeta,
    isSuccess: playersStatAPI,
    refetch: refetchMatch,
  } = useQuery(['match', 'wieng_2022_t20_03', user_id], getMatchPointsRemote, {
    notifyOnChangeProps: ['data', 'isSuccess'],
    enabled: enabled,
    // staleTime: 1000 * 1000,
  });
  return {playersStatMeta, playersStatAPI, refetchMatch};
};
