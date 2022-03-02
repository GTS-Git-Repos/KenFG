import {useQuery} from 'react-query';
import {getMatchPlayersRemote} from '../../../remote/matchesRemote';

export const useMatchPlayers = (
  match_key: string,
  user_id: string,
  isFullMatch: boolean,
) => {
  const {
    data: players,
    isSuccess: playersAPI,
    isError: mpError,
    refetch: refetchPlayers,
  } = useQuery(
    ['contests', match_key, user_id, isFullMatch],
    getMatchPlayersRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isError'],
    },
  );
  return {players, playersAPI, mpError, refetchPlayers};
};
