import {
  HANDLE_ERROR,
  UPDTAE_MATCH_META,
  UPDATE_MY_CONTESTS,
  UPDATE_PLAYERS_POINTS,
  UPDATE_USER_TEAMS,
  RESET_INITIAL,
} from './actionTypes';

export const updateAppError = (payload: string) => ({
  type: HANDLE_ERROR,
  payload,
});

export const updateMatchConetstsAction = (payload: Array<any>) => ({
  type: UPDATE_MY_CONTESTS,
  payload,
});

export const updateUserTeamsInMatchAction = (payload: Array<any>) => ({
  type: UPDATE_USER_TEAMS,
  payload,
});

export const updatePlayerPointsAction = (payload: Array<any>) => ({
  type: UPDATE_PLAYERS_POINTS,
  payload,
});

export const resetToInitialAction = () => ({
  type: RESET_INITIAL,
});

// update that data parsed from 3rd party score API
// it added match team meta, current score state,scorecard,all players meta
export const updateMatchMetaAction = (payload: any) => {
  const matchMeta = {
    match: payload.match,
    matchStatus: payload.matchStatus,
    team_a: payload.team_a,
    team_b: payload.team_b,
    score_a: payload.score_a,
    score_b: payload.score_b,
    notification: payload.notification,
    striker: payload.striker,
    nonStriker: payload.nonStriker,
    bowler: payload.bowler,
    lastOverData: payload.lastOverData,
    innings: payload.innings,
  };
  // console.log(Object.keys(payload));
  return {
    type: UPDTAE_MATCH_META,
    payload: {
      matchMeta,
      playersMeta: payload.playersMeta,
      xis: payload.xisKey,
    },
  };
};
