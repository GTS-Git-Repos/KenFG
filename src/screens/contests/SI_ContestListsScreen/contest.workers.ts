import {useQuery} from 'react-query';
import {contestListsRemote} from '../../../remote/matchesRemote';

export const useContestList = (match_key: string, isFullMatch: boolean) => {
  const {data: contests, isSuccess: contestsAPI} = useQuery(
    ['contests', match_key, isFullMatch],
    contestListsRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess'],
      staleTime: 60 * 5000,
    },
  );
  return {contests, contestsAPI};
};
