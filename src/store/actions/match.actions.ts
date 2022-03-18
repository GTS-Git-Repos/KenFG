import {HANDLE_ERROR, UPDTAE_MATCH_META} from './actionTypes';

export const updateAppError = (payload: string) => ({
  type: HANDLE_ERROR,
  payload,
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
  // console.log(metaObj);
  return {
    type: UPDTAE_MATCH_META,
    payload: {
      matchMeta,
      playersMeta: payload.playersMeta,
      xis: payload.xis,
    },
  };
};
