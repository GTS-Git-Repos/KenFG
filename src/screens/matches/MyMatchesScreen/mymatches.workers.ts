import {useQuery} from 'react-query';
import {joinedMatchesRemote} from '../../../remote/matchesRemote';

export const useMatches = (user_id: string, status: string) => {
  const {data: matches, isSuccess: matchesAPI} = useQuery(
    ['matches', user_id, status],
    joinedMatchesRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess'],
    },
  );
  return {matches, matchesAPI};
};
