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
