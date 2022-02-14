// A place where a contest related hooks all are placed

import {useQuery} from 'react-query';
import {contestleaderBoardRemote} from '../remote/contestRemote';
import {
  contestListsRemote,
  getJoinedContestRemote,
  getJoinedTeamsRemote,
  liveMatchMetaRemote,
} from '../remote/matchesRemote';

// const {data} = useQuery(
//   ['contests', matchSelector.match_key],
//   contestListsRemote,
//   {staleTime: 8000},
// );

export const useContestList = (
  match_key: string,
  user_id: string,
  isFullMatch: boolean,
) => {
  const {
    data: contests,
    isSuccess: contestsAPI,
    isFetching: contestsAPILive,
    refetch: refetchContests,
  } = useQuery(
    ['contests', match_key, user_id, isFullMatch],
    contestListsRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
      staleTime: 1000 * 60,
    },
  );
  return {contests, contestsAPI, contestsAPILive, refetchContests};
};

// Get Created Teams for the match
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
  const {
    data: matchMeta,
    isSuccess: matchAPI,
    isFetching: matchAPILive,
    refetch: refetchMatch,
  } = useQuery(['match', 'wieng_2022_t20_03', user_id], liveMatchMetaRemote, {
    notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
  });
  return {matchMeta, matchAPI, matchAPILive, refetchMatch};
};

export const useContestLeaderboard = (
  match_key: string,
  contest_key: string,
  user_id: string,
) => {
  const {
    data: leaderBoardMeta,
    isSuccess: leaderBoardAPI,
    isFetching: leaderBoardLive,
    refetch: refetchMatch,
  } = useQuery(
    ['leaderboard', match_key, contest_key, user_id],
    contestleaderBoardRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
    },
  );
  return {leaderBoardMeta, leaderBoardAPI, leaderBoardLive, refetchMatch};
};
