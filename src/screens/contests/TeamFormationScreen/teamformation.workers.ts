import {useQuery} from 'react-query';
import {getMatchPlayersRemote} from '../../../remote/matchesRemote';

export const useMatchPlayers = (match_key: string, user_id: string) => {
  const {data: players, isSuccess: playersAPI} = useQuery(
    ['contests', match_key, user_id],
    getMatchPlayersRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess'],
      staleTime: 60 * 5000,
    },
  );
  return {players, playersAPI};
};
