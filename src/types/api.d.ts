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
  guaranteed: number;
  max_entry: number;
  bonus: string;
  is_practice: false;
  others: any;
}

export interface winningsLists {
  key: string;
  value: string;
}
