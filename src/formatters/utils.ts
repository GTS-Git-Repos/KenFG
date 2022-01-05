const log = console.log;

export const getTeamMetaData = (payload: any, team_key: string) => {
  return {
    key: payload.teams[team_key].key,
    code: payload.teams[team_key].code,
    name: payload.teams[team_key].name,
  };
};

export const calculateTeamScore = (payload: any, team_key: string) => {
  try {
    const inningsOrder = payload.play.innings_order;
    let teamScore = [];
    for (let innings of inningsOrder) {
      const {team} = getTeamAndDayFromInningsKey(innings);
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

export const getNotificationString = (payload: any) => {
  return 'Live Match API Intergration ...';
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
  let ballsData = [];
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

export const getScroeByInnings = (allInnings: any[], inningsOrder: any[]) => {
  return 1;
};

const getPlayerData = (players: any, player_key: string) => {
  return players[player_key];
};

export const getTeamKeyByInningsKey = (innings_key: string) => {
  return innings_key.split('_')[0];
};
export const getTeamAndDayFromInningsKey = (innings_key: string) => {
  return {
    team: innings_key.split('_')[0],
    day: innings_key.split('_')[1],
  };
};
const oversArrayInToString = (overs: number[]) => `${overs[0]}.${overs[1]}`;

export const parseCurrentInnings = (live: any) => {
  let data = live.innings.split('_');
  return {
    team: data[0],
    day: data[1],
  };
};

const logError = (name: string, err: any) => {
  console.log(`\x1b[33m [*ERROR*] Request ${name} : err`);
};
