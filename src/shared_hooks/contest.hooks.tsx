// A place where a contest related hooks all are placed

import { useQuery } from "react-query";
import { getJoinedTeamsRemote } from "../remote/matchesRemote";

export const useGetTeams = (match_key: string, user_id: string) => {
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
  