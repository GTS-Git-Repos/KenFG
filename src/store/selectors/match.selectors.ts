// the reselect selectors for match

import {createSelector} from 'reselect';

const MatchMetaState = (state: any) => state.match.matchMeta;
const MyContestState = (state: any) => state.match.mycontest;
const UserTeamsState = (state: any) => state.match.myteams;
const MatchPlayersState = (state: any) => state.match.match_players;
const XisState = (state: any) => state.match.xis;
const LoadingState = (state: any) => state.match.loading;

export const matchMetaSelector = createSelector(
  MatchMetaState,
  (matchMeta: any): null | undefined => {
    return matchMeta;
  },
);

export const matchContestsSelector = createSelector(
  MyContestState,
  (contests: any): null | Array<any> => {
    return contests;
  },
);

export const userTeamsInMatchSelector = createSelector(
  UserTeamsState,
  (teams: any): null | Array<any> => {
    return teams;
  },
);



export const matchPlayerPoints = createSelector(
  MatchPlayersState,
  XisState,
  (players: any[], xis: string[]): null | Array<any> => {
    
    if (!players || !xis) {
      return [];
    }
    const xisPlayers = [];
    for (const player of players) {
      if (xis.includes(player.key)) {
        xisPlayers.push(player);
      }
    }
    return xisPlayers;
  },
);

export const matchLoadingSelector = createSelector(
  LoadingState,
  (loading): boolean => {
    return loading;
  },
);
