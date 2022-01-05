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
    const teamAScore = calculateTeamScore(payload, 'a');
    const teamBScore = calculateTeamScore(payload, 'b');
    const notification = getNotificationString(payload);
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
    const d = getScroeByInnings(allInnings, inningsOrder);
    log('Data -->', d);
    let liveObj = {
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
    };

    return liveObj;
  } catch (err) {
    console.log(err);
    log('Failed in <liveMatchStatsFormat>');
    return null;
    return liveTestMatchStatsBluprint;
  }
};
