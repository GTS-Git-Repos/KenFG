import {useQuery} from 'react-query';
import {
  contestListsRemote,
  getJoinedContestRemote,
  getJoinedTeamsRemote,
} from '../../../remote/matchesRemote';

export const useContestList = (match_key: string) => {
  const {data: contests, isSuccess: contestsAPI} = useQuery(
    ['contests', match_key],
    contestListsRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess'],
      staleTime: 60 * 5000,
    },
  );
  return {contests, contestsAPI};
};

export const useJoinedContests = (match_key: string, user_id: string) => {
  const {data: joined, isSuccess: joinedAPI} = useQuery(
    ['joined_contest', match_key, user_id],
    getJoinedContestRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess'],
      staleTime: 60 * 2000,
    },
  );
  return {joined, joinedAPI};
};

export const useGetTeams = (match_key: string, user_id: string) => {
  const {data: teams, isSuccess: teamsAPI} = useQuery(
    ['teams', match_key, user_id],
    getJoinedTeamsRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess'],
      staleTime: 60 * 2000,
    },
  );
  return {teams, teamsAPI};
};
