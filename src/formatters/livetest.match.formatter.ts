import {liveTestMatchStatsBluprint} from '../dataBlueprint/liveTestMatch.bluprint';
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
} from './utils';
const log = console.log;

export const liveTestMatchFormat = (payload: any) => {
  try {
    const obj: any = {...liveTestMatchStatsBluprint};

    const teams = payload.teams;
    const play = payload.play;
    const live = payload.play.live;
    const inningsOrder = play.innings_order;
    const allInnings = play.innings;
    const allPlayers = payload.players;
    const recentOver = live.recent_overs[0].ball_keys;
    const related_balls = play.related_balls;

    const matchMeta = getMatchMeta(payload);
    const teamAMeta = getTeamMetaData(payload, 'a');
    const teamBMeta = getTeamMetaData(payload, 'b');
    const teamAScore = calculateTeamScore(payload, 'a', teams);
    const teamBScore = calculateTeamScore(payload, 'b', teams);
    const notification = getNotificationString(live);
    const currentInnings = parseCurrentInnings(live);
    const striker = getCurrentStrikerData(
      allPlayers,
      live.striker_key,
      currentInnings.day,
    );
    const nonStriker = getCurrentStrikerData(
      allPlayers,
      live.non_striker_key,
      currentInnings.day,
    );
    const bowler = getCurrentBowlerData(
      allPlayers,
      play.related_balls,
      live.last_ball_key,
      currentInnings.day,
    );
    const lastOverData = getLastOverData(recentOver, related_balls);
    const inningsData = getScroeByInnings(
      allInnings,
      inningsOrder,
      teams,
      allPlayers,
    );
    const liveObj = {
      match: matchMeta,
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
    };

    return liveObj;
  } catch (err) {
    console.log(err);
    log('Failed in <liveMatchStatsFormat>');
    return null;
    return liveTestMatchStatsBluprint;
  }
};
