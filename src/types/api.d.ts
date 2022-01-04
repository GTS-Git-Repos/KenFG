export interface contestListsTypes {
  key: string;
  type: string;
  match_key: string;
  title: string;
  entry: string;
  group: string;
  prize: {
    amount_letters: string;
    amount: string;
    winnings: Array<winningsLists>;
  };
  total_spots: number;
  total_joined: number;
  guaranteed: string;
  max_entry: number;
  bonus: string;
  is_practice: false;
  others: any;
}

export interface winningsLists {
  key: string;
  value: string;
}

export interface liveTeamShape {
  has_points: boolean;
  key: string;
  name: string;
  overs: number;
  runs: number;
  wickets: number;
}
