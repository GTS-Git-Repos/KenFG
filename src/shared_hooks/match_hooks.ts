import {useQuery} from 'react-query';
import {compareTeamsRemote} from '../remote/matchesRemote';

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
