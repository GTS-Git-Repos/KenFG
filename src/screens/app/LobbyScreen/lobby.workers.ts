import {useQuery} from 'react-query';
import {upcommingMatchesandBannersRemote} from '../../../remote/matchesRemote';

export const useLobbyMeta = (user_key: string) => {
  const {data: lobbyMeta, isSuccess: lobbyAPI} = useQuery(
    ['lobby', user_key],
    upcommingMatchesandBannersRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess'],
      staleTime: 0,
    },
  );
  return {lobbyMeta, lobbyAPI};
};
