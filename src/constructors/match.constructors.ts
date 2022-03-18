// A file that parse Match Meta Information

import {
  calculateTeamScore,
  getCurrentBowlerData,
  getCurrentStrikerData,
  getLastOverData,
  getMatchMeta,
  getNotificationString,
  getScroeByInnings,
  getTeamMetaData,
  parseCurrentInnings,
} from './utils.constructor';
const log = console.log;

export const MatchScoreFormat = (payload: any) => {
  try {
    const teams = payload.teams;
    const matchStatus = payload.status;
    const allPlayers = payload.players;
    const xisKey = [
      ...payload.squad.a.playing_xi,
      ...payload.squad.b.playing_xi,
    ];
    // const squad = [
    //   ...payload.squad.a.player_keys,
    //   ...payload.squad.b.player_keys,
    // ];

    const play = payload.play;
    const live = payload?.play?.live;
    const inningsOrder = play?.innings_order;
    const allInnings = play?.innings;

    const playStatus = payload.play_status;

    let striker = null;
    let nonStriker = null;
    let bowler = null;
    let lastOverData = null;

    const matchMeta = getMatchMeta(payload);
    const teamAMeta = getTeamMetaData(payload, 'a');
    const teamBMeta = getTeamMetaData(payload, 'b');
    const teamAScore = calculateTeamScore(payload, 'a', teams);
    const teamBScore = calculateTeamScore(payload, 'b', teams);

    const notification = getNotificationString(playStatus, play);

    if (live) {
      const currentInnings = parseCurrentInnings(live);
      const recentOver = live.recent_overs[0].ball_keys;
      const related_balls = play.related_balls;

      striker = getCurrentStrikerData(
        allPlayers,
        live.striker_key,
        currentInnings.day,
      );
      nonStriker = getCurrentStrikerData(
        allPlayers,
        live.non_striker_key,
        currentInnings.day,
      );
      // get next innings bowler data
      bowler = getCurrentBowlerData(
        allPlayers,
        play.related_balls,
        live.last_ball_key,
        currentInnings.day,
      );
      lastOverData = getLastOverData(recentOver, related_balls);
    }

    const inningsData = getScroeByInnings(
      allInnings,
      inningsOrder,
      teams,
      allPlayers,
    );
    const finalObj = {
      match: matchMeta,
      matchStatus,
      team_a: teamAMeta,
      team_b: teamBMeta,
      score_a: teamAScore,
      score_b: teamBScore,
      notification,
      striker,
      nonStriker,
      bowler,
      lastOverData,
      innings: inningsData,
      xisKey,
      // squad,
    };
    return finalObj;
  } catch (err) {
    console.log(err);
    log('Failed in <liveMatchStatsFormat>');
    throw err;
  }
};
