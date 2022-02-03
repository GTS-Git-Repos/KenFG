// A place where a contest related hooks all are placed

import {useQuery} from 'react-query';
import {
  getJoinedContestRemote,
  getJoinedTeamsRemote,
  liveMatchMetaRemote,
} from '../remote/matchesRemote';

export const useGetTeams = (
  match_key: string,
  user_id: string,
  isFullMatch: boolean,
) => {
  const {
    data: teams,
    isSuccess: teamsAPI,
    isFetching: teamsAPILive,
    refetch: refetchTeams,
  } = useQuery(
    ['teams', match_key, user_id, isFullMatch],
    getJoinedTeamsRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
      staleTime: 1000 * 60,
    },
  );
  return {teams, teamsAPI, teamsAPILive, refetchTeams};
};

export const useJoinedContests = (
  match_key: string,
  user_id: string,
  isFullMatch: boolean,
) => {
  const {
    data: joined,
    isSuccess: joinedAPI,
    isFetching: joinedAPILive,
    refetch: refetchJoinedContest,
  } = useQuery(
    ['joined_contest', match_key, user_id, isFullMatch],
    getJoinedContestRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
    },
  );
  return {joined, joinedAPI, joinedAPILive, refetchJoinedContest};
};

export const useMatchMeta = (match_key: string, user_id: string) => {
  // {"match_key":"wieng_2022_t20_03","mobile":"9876543210","data_key":"all"}
  const {
    data: matchMeta,
    isSuccess: matchAPI,
    isFetching: matchAPILive,
    refetch: refetchMatch,
  } = useQuery(['match', 'wieng_2022_t20_03', user_id], liveMatchMetaRemote, {
    notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
    staleTime: 1000 * 1000,
  });
  return {matchMeta, matchAPI, matchAPILive, refetchMatch};
};
