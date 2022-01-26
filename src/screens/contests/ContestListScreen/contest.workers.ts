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
  const {
    data: joined,
    isSuccess: joinedAPI,
    isFetching: joinedAPILive,
    refetch: refetchJoinedContest,
  } = useQuery(['joined_contest', match_key, user_id], getJoinedContestRemote, {
    notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
  });
  return {joined, joinedAPI, joinedAPILive, refetchJoinedContest};
};

export const useGetTeams = (match_key: string, user_id: string) => {
  // need to ~put on~ <change to> shared place
  const {
    data: teams,
    isSuccess: teamsAPI,
    isFetching: teamsAPILive,
    refetch: refetchTeams,
  } = useQuery(['teams', match_key, user_id], getJoinedTeamsRemote, {
    notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
  });
  return {teams, teamsAPI, teamsAPILive, refetchTeams};
};
