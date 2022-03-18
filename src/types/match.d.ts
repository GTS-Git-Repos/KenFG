export interface PlayerType {
  key: string;
  name: string;
  points: number;
  credits: number;
  team_key: string;
  seasonal_role: string;
  recent_performance?: any;
}

export interface TeamPreviewType {
  team_key: string;
  cap?: PlayerType;
  vc?: PlayerType;
  keepers: Array<PlayerType>;
  batsman: Array<PlayerType>;
  all_rounder: Array<PlayerType>;
  bowler: Array<PlayerType>;
  team_a: {
    key: string;
    count: number;
  };
  team_b: {
    key: string;
    count: number;
  };
  credits_left: number;
}

export interface TeamFormationMutationType {
  edit: boolean;
  clone: boolean;
}

export interface SwitchTeamType {
  match_key: string;
  contest_key: string;
  old_team_key: string;
  player_key: string;
  existedTeams: Array<any>;
}

export interface SelectedMatchType {
  joinContest: null | any;
  match_key: string;
  name: string;
  start_at: string;
  team_a: string;
  team_a_name: string;
  team_b: string;
  team_b_name: string;
  titleString: string;
  // fullMatch: boolean;
}

export interface MatchCommentaryType {
  joinContest: null | any;
  match_key: string;
  name: string;
  start_at: string;
  team_a: string;
  team_a_name: string;
  team_b: string;
  team_b_name: string;
  titleString: string;
}
export interface MatchScoreStateType {
  match: Match;
  matchStatus: string;
  team_a: TeamMeta;
  team_b: TeamMeta;
  score_a: Score[];
  score_b: Score[];
  notification: string;
  striker: Striker | null;
  nonStriker: NonStriker | null;
  bowler: Bowler | null;
  lastOverData: number[];
  innings: Inning[];
  xisKey: string[];
  playersKeys: string[];
  players: Array<any>;
}

export interface Match {
  start_at: number;
  status: string;
  winner: any;
  messages: any[];
  short_name: string;
  name: string;
  sub_title: string;
  format: string;
}

export interface TeamMeta {
  key: string;
  code: string;
  name: string;
  a: string;
}


export interface Score {
  team_key: string;
  name: string;
  runs: number;
  wickets: number;
  overs: string;
  isCompleted: boolean;
}

export interface Striker {
  key: string;
  name: string;
  runs: number;
  balls: number;
}

export interface NonStriker {
  key: string;
  name: string;
  runs: number;
  balls: number;
}

export interface Bowler {
  key: string;
  name: string;
  taken_wicket: number;
  given_runs: number;
  used_overs: string;
}

export interface Inning {
  code: string;
  is_completed: boolean;
  runs: number;
  wickets: number;
  overs: string;
  extra: Extra;
  battersData: BattersDaum[];
  bowlersData: BowlersDaum[];
  wicketsData: WicketsDaum[];
}

export interface Extra {
  extra: number;
  bye: number;
  leg_bye: number;
  wide: number;
  no_ball: number;
  penalty: any;
}

export interface BattersDaum {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  six: number;
  sr: number;
  isBatting: boolean;
  msg: any;
}

export interface BowlersDaum {
  name: string;
  overs: string;
  runs: number;
  maider: number;
  balls: number;
  wickets: number;
  economy: number;
}

export interface WicketsDaum {
  name: string;
  overs: string;
  runs: number;
  number: number;
}

export interface MatchScreenType {
  matchMeta: Omit<MatchScoreStateType, 'players' | 'playersKeys' | 'xisKey'>;
  contests: Array<any>;
  teams: Array<any>;
  commentry: Array<any>;
  onContestCardPress(contest_key: string): void;
}
