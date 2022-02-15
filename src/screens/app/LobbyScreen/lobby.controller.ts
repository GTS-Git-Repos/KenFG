import {useQuery} from 'react-query';
import {upcommingMatchesandBannersRemote} from '../../../remote/matchesRemote';

export const useLobbyMeta = (user_key: string, isFullMatch: boolean) => {
  const {
    data: lobbyMeta,
    isLoading: lobbyLive,
    isSuccess: lobbyAPI,
  } = useQuery(
    ['lobby', user_key, isFullMatch],
    upcommingMatchesandBannersRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isLoading'],
      staleTime: 0,
    },
  );
  return {lobbyMeta, lobbyLive, lobbyAPI};
};
