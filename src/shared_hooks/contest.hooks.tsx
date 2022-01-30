// A place where a contest related hooks all are placed

import {useQuery} from 'react-query';
import {
  getJoinedContestRemote,
  getJoinedTeamsRemote,
  liveMatchMetaRemote,
} from '../remote/matchesRemote';

export const useGetTeams = (match_key: string, user_id: string) => {
  const {
    data: teams,
    isSuccess: teamsAPI,
    isFetching: teamsAPILive,
    refetch: refetchTeams,
  } = useQuery(['teams', match_key, user_id], getJoinedTeamsRemote, {
    notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
    staleTime: 1000 * 60,
  });
  return {teams, teamsAPI, teamsAPILive, refetchTeams};
};

export const useMatchMeta = (match_key: string, user_id: string) => {
  const {
    data: matchMeta,
    isSuccess: matchAPI,
    isFetching: matchAPILive,
    refetch: refetchMatch,
  } = useQuery(['match', match_key, user_id], liveMatchMetaRemote, {
    notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
    staleTime: 1000 * 60,
  });
  return {matchMeta, matchAPI, matchAPILive, refetchMatch};
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
