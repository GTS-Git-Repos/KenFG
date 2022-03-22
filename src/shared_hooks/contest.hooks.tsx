// A place where a contest related hooks all are placed

import {useQuery} from 'react-query';

import {
  contestleaderBoardRemote,
  contestListsRemote,
  getPrivateContestsRemote,
} from '../remote/contestRemote';
import {
  getCreatedTeamsRemote,
  getJoinedContestRemote,
} from '../remote/matchesRemote';

export const useContestList = (
  match_key: string,
  user_id: string,
  isFullMatch: boolean,
) => {
  const {
    data: contests,
    isLoading: ctsLoading,
    refetch: rfContests,
    isError: ctstError,
  } = useQuery(['contests', match_key, isFullMatch], contestListsRemote, {
    notifyOnChangeProps: ['data', 'isLoading', 'isError'],
    cacheTime: 0,
  });
  return {contests, ctsLoading, rfContests, ctstError};
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
    getCreatedTeamsRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
      staleTime: 1000 * 60,
    },
  );
  return {teams, teamsAPI, teamsAPILive, refetchTeams};
};

/**
 * used to get joined contests in the match,
 * format {contestMeta:{}, joinedTeams:[]}
 * before team selection screen (join contest button pressed)
 * before team switching feature (my Contest, leaderboard)
 */
export const useJoinedContests = (
  match_key: string,
  user_id: string,
  isFullMatch: boolean,
) => {
  const {
    data: joined,
    isSuccess: joinedAPI,
    isError: errJC,
    isFetching: joinedAPILive,
    refetch: rfJC,
  } = useQuery(
    ['joined_contest', match_key, user_id, isFullMatch],
    getJoinedContestRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isError', 'isFetching'],
    },
  );
  return {joined, joinedAPI, joinedAPILive, errJC, rfJC};
};

// move to match hooks later not now
export const useContestLeaderboard = (
  match_key: string,
  contest_key: string,
  user_id: string,
) => {
  const {
    data: ldbMeta,
    isSuccess: ldbAPI,
    isFetching: ldbLive,
    isError: ldbErr,
    refetch: refetchLeaderBoard,
  } = useQuery(
    ['leaderboard', match_key, contest_key, user_id],
    contestleaderBoardRemote,
    {
      notifyOnChangeProps: ['data', 'isSuccess', 'isFetching', 'isError'],
    },
  );
  return {
    ldbMeta,
    ldbAPI,
    ldbLive,
    ldbErr,
    refetchLeaderBoard,
  };
};

export const usePrivateContestList = (match_key: string, user_key: string) => {
  const {
    data: p_ctst,
    isSuccess: p_ctst_s,
    isFetching: p_ctst_f,
    isError: p_ctst_e,

    refetch: rfp_ctst,
  } = useQuery(['p_contest', match_key, user_key], getPrivateContestsRemote, {
    notifyOnChangeProps: [
      'data',
      'isSuccess',
      'isFetching',
      'isLoading',
      'isError',
    ],
  });
  return {p_ctst, p_ctst_s, p_ctst_f, p_ctst_e, rfp_ctst};
};
