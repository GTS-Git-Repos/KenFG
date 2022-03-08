// Match data RAW Api Parsing utilities

const log = console.log;

export const getTeamMetaData = (payload: any, api_key: string) => {
  return {
    key: payload.teams[api_key].key,
    code: payload.teams[api_key].code,
    name: payload.teams[api_key].name,
    [api_key]: api_key,
  };
};

export const calculateTeamScore = (
  payload: any,
  team_key: string,
  teams: any,
) => {
  try {
    const inningsOrder = payload.play.innings_order;
    let teamScore = [];
    for (let innings of inningsOrder) {
      const {team} = getTeamAndDayFromInningsKey(innings, teams);
      if (team_key === team) {
        const inningsData = payload.play.innings[innings];
        teamScore.push({
          team_key: team,
          name: inningsData.index,
          runs: inningsData.score.runs,
          wickets: inningsData.wickets,
          overs: `${inningsData.overs[0]}.${inningsData.overs[1]}`,
          isCompleted: inningsData.is_completed,
        });
      }
    }
    return teamScore;
  } catch (err) {
    logError('calculateTeamScore', err);
    return [{}];
  }
};

export const StatusOfTheMatch = () => {};

export const getNotificationString = (playStatus: string, play: any) => {
  if (play.live) {
    let score = play.live.score;
    if (score.msg_lead_by) {
      return score.msg_lead_by;
    }
    if (score.msg_trail_by) {
      return score.msg_trail_by;
    } else {
      return 'Match Break';
    }
  } else {
    // return winning data
    if (playStatus === 'result') {
      return play.result.msg;
    } else {
      return 'Match Will be Started';
    }
  }
};
export const getMatchMeta = (payload: any) => {
  return {
    start_at: payload.start_at,
    status: payload.status,
    winner: payload.winner,
    messages: payload.messages,
    short_name: payload.short_name,
    name: payload.name,
    sub_title: payload.sub_title,
    format: payload.format,
  };
};

export const getCurrentStrikerData = (
  players: any,
  player_key: string,
  currentInnings: string,
) => {
  const player = getPlayerData(players, player_key);
  return {
    key: player_key,
    name: player.player.jersey_name,
    runs: player.score[currentInnings].batting.score.runs,
    balls: player.score[currentInnings].batting.score.balls,
  };
};
export const getCurrentBowlerData = (
  players: any,
  related_balls: any,
  last_ball_key: string,
  currentInnings: string,
) => {
  const lastBallBowlerKey = related_balls[last_ball_key].bowler.player_key;
  const bowler = players[lastBallBowlerKey];
  const innings: any = bowler.score[currentInnings];
  return {
    key: bowler.player.key,
    name: bowler.player.jersey_name,
    taken_wicket: innings.bowling.score.wickets,
    given_runs: innings.bowling.score.runs,
    used_overs: oversArrayInToString(innings.bowling.score.overs),
  };
};

export const getLastOverData = (recentOver: any[], related_balls: any[]) => {
  const ballsData = [];
  for (const key of recentOver) {
    const ball = related_balls[key];
    if (ball.bowler.is_wicket) {
      ballsData.push('w');
      return;
    } else {
      ballsData.push(ball.batsman.runs);
    }
  }
  if (ballsData.length < 6) {
    const nullArray = new Array(6 - ballsData.length).fill(null);
    for (const _ of nullArray) {
      ballsData.push(null);
    }
  }
  return ballsData;
};
// For constructing ScoreCard
export const getScroeByInnings = (
  allInnings: any[],
  inningsOrder: any[],
  teams: any,
  allPlayers: any,
) => {
  const inningsData: any = [];
  for (const ikey of inningsOrder) {
    const innings_t_bowlers = swapInningsKeyForBowler(ikey);

    const {code, day} = getTeamAndDayFromInningsKey(ikey, teams);
    const innings_t = allInnings[ikey];
    const innings_bowlers = allInnings[innings_t_bowlers];
    const batters = getBattersDataByInnings(
      innings_t.batting_order,
      allPlayers,
      day,
    );
    // Bowlers
    const bowlers = getBowlerDataByInnings(
      innings_bowlers.bowling_order,
      allPlayers,
      day,
    );
    const wickets = getWicketsDataByInnings(
      innings_t.wicket_order,
      allPlayers,
      day,
    );

    inningsData.push({
      code: code,
      is_completed: innings_t.is_completed,
      runs: innings_t.score.runs,
      wickets: innings_t.wickets,
      overs: oversArrayInToString(innings_t.overs),
      extra: innings_t.extra_runs,
      battersData: batters,
      bowlersData: bowlers,
      wicketsData: wickets,
    });
  }

  return inningsData;
};

const getBattersDataByInnings = (
  batters: any,
  allPlayers: any,
  day: string,
) => {
  const battersData = [];
  for (const key of batters) {
    const player = allPlayers[key];
    const hasScore = player.score[day].batting;
    if (!hasScore) {
      return;
    }
    const score = player.score[day].batting.score;
    const isDismis = player.score[day].batting.dismissal;
    battersData.push({
      name: player.player.jersey_name,
      runs: score.runs,
      balls: score.balls,
      fours: score.fours,
      six: score.sixes,
      sr: score.strike_rate,
      isBatting: isDismis ? false : true,
      msg: isDismis ? isDismis.msg : false,
    });
  }
  return battersData;
};

const swapInningsKeyForBowler = (i_key: string) => {
  // swapped because API bowlers innings is diffrent
  const i = i_key.split('_')[0];
  const d = i_key.split('_')[1];
  if (i === 'a') {
    return `${'b'}_${d}`;
  } else {
    if (i === 'b') {
      return `${'a'}_${d}`;
    }
  }
};

const getBowlerDataByInnings = (bowlers: any, allPlayers: any, day: string) => {
  const bowlersData = [];
  for (const key of bowlers) {
    const player = allPlayers[key];
    const hasScore = player.score[day].bowling;
    if (!hasScore) {
      return;
    }
    const score = player.score[day].bowling.score;
    bowlersData.push({
      name: player.player.jersey_name,
      overs: oversArrayInToString(score.overs),
      runs: score.runs,
      maider: score.maiden_overs,
      balls: score.balls,
      wickets: score.wickets,
      economy: score.economy,
    });
  }
  return bowlersData;
};

const getWicketsDataByInnings = (
  wickets: any,
  allPlayers: any,
  day: string,
) => {
  const wicketsData = [];
  for (const key of wickets) {
    const player = allPlayers[key];
    const isDismissal = player.score[day].batting.dismissal;
    if (!isDismissal) {
      return;
    }
    const state = player.score[day].batting.dismissal;
    wicketsData.push({
      name: player.player.jersey_name,
      overs: oversArrayInToString(state.overs),
      runs: state.team_runs,
      number: state.wicket_number,
    });
  }
  return wicketsData;
};

const getPlayerData = (players: any, player_key: string) => {
  return players[player_key];
};

// not used anywhere, need to remove
export const getTeamKeyByInningsKey = (innings_key: string) => {
  return innings_key.split('_')[0];
};

// get team code and day number from am in innings key
export const getTeamAndDayFromInningsKey = (
  innings_key: string,
  teams: any,
) => {
  return {
    code: teams[innings_key.split('_')[0]].code,
    team: innings_key.split('_')[0],
    day: innings_key.split('_')[1],
  };
};
const oversArrayInToString = (overs: number[]) => `${overs[0]}.${overs[1]}`;

export const parseCurrentInnings = (live: any) => {
  const data = live.innings.split('_');
  return {
    team: data[0],
    day: data[1],
  };
};

// tranform and normalize contests API contests for easier use
export function normalizeContests(payload: Array<any>) {
  try {
    const contests = [];
    for (const contest of payload) {
      const obj = {...contest};
      // calc percentage of fillted spots
      const total_spots = parseInt(obj.total_spots);
      let filledSpots = parseInt(obj?.filled_spots?.team_count);
      // if fillted sport not a valid number set to 0 as a filled sport
      if (Number.isInteger(filledSpots) === false) {
        filledSpots = 0;
      }
      const percent = (filledSpots / total_spots) * 100;
      // add a new key occupaid cent as a percentage
      obj.occupaid_cent = percent;
      // reasign some keys
      obj.filled_spots = filledSpots;
      obj.total_spots = total_spots;
      // max entry as number for easier use
      obj.max_entry = parseInt(obj.max_entry);

      // push to the stack
      contests.push(obj);
    }

    return contests;
  } catch (err) {
    throw new Error('failed in normalizeContests()');
  }
}

const logError = (name: string, err: any) => {
  console.log(`\x1b[33m [*ERROR*] Request ${name} : err`);
};
