import {useQuery} from 'react-query';
import {
  getCreatedTeamsRemote,
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

// dont use it
export const useGetTeams = (match_key: string, user_id: string) => {
  console.log('DEPRCATED USE SHARED HOOKS FOR GET TEAMS');
  
  const {data: teams} = useQuery(
    ['teams', match_key, user_id],
    getCreatedTeamsRemote,
    {
      notifyOnChangeProps: ['data'],
    },
  );
  return {teams};
};
