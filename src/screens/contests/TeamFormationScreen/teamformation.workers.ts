import {useQuery} from 'react-query';
import {getMatchPlayersRemote} from '../../../remote/matchesRemote';

export const useMatchPlayers = (match_key: string, user_id: string) => {
  const {
    data: players,
    isSuccess: playersAPI,
    refetch: refetchPlayers,
  } = useQuery(['contests', match_key, user_id], getMatchPlayersRemote, {
    notifyOnChangeProps: ['data', 'isSuccess'],
  });
  return {players, playersAPI, refetchPlayers};
};
