// A file that parse Match Meta Information

import {covertInputTimeStringToDate} from '../utils/comman';
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

// used in match screen my contests tab
//TODO: teams section not yet done, need to discussed with API team
export const normalizeMatchUserContets = (payload: any) => {
  try {
    const contests = payload.slice(0, payload.length - 1);
    // teams will do later after talked with API team
    if (contests.length === 0) {
      return [];
    } else {
      return contests;
    }
    throw 'unhanled error happended';
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const parseJoinedMatchesAPI = (payload: any) => {
  try {
    const matches = [];
    for (const match of payload) {
      const obj = {...match};
      obj.start_at = covertInputTimeStringToDate(match.teams.start_at);
      matches.push(obj);
    }
    return matches;
  } catch (err) {
    console.log('parseJoinedMatchesAPI', err);
    return false;
  }
};

export const normalizeUserTeamsInMatch = (payload: any) => {
  try {
    const inputTeams = payload[0].teams;
    const teams = [];
    for (const team of inputTeams) {
      const obj: any = {};
      const teamMeta = team.players;
      const players = team.players.players;
      const cap = players.find((item: any) => item.key === teamMeta.cap_key);
      const vc = players.find((item: any) => item.key === teamMeta.vc_key);
      obj.team_key = team.team_key;
      obj.team_a = teamMeta.team_a;
      obj.team_b = teamMeta.team_b;
      obj.cap = cap;
      obj.vc = vc;
      obj.keeper = players.filter(
        (item: any) => item.seasonal_role === 'keeper',
      );
      obj.batsman = players.filter(
        (item: any) => item.seasonal_role === 'batsman',
      );
      obj.all_rounder = players.filter(
        (item: any) => item.seasonal_role === 'all_rounder',
      );
      obj.bowler = players.filter(
        (item: any) => item.seasonal_role === 'bowler',
      );

      teams.push(obj);
    }
    // console.log('teams', teams);
    return teams;
  } catch (err) {
    console.log('normalizeUserTeamsInMatch', err);
    throw err;
  }
};
