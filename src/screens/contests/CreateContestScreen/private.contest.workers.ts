import {useQuery} from 'react-query';
import {
  getJoinedTeamsRemote,
  getPrivateContestsRemote,
} from '../../../remote/matchesRemote';

export const usePrivateContestList = (match_key: string, user_key: string) => {
  const {
    data: contests,
    isSuccess: contestsAPI,
    isFetching: contestAPILive,
    refetch,
  } = useQuery(
    ['private_contests', match_key, user_key],
    getPrivateContestsRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
    },
  );
  return {contests, contestsAPI, contestAPILive, refetch};
};

export const useGetTeams = (match_key: string, user_id: string) => {
  const {data: teams} = useQuery(
    ['teams', match_key, user_id],
    getJoinedTeamsRemote,
    {
      notifyOnChangeProps: ['data'],
    },
  );
  return {teams};
};
