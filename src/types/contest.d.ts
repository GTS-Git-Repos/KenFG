// type defination for contest feature

// contestPage used in full contest and second innings contests
export interface ContestPageType {
  index: number;
  selectedTab: string;
  isFullMatch: boolean;
  contests: Array<any>;
  contestLoading: boolean;
  // contest filters
  contestFilters: Array<any>;
  // onPress contest entry fee
  proceedToJoin(contest_key: string): void;
  // active sort filter, total price or entry fee
  sortStatus: SortStatusType;
  filterOnPress(id: string): any;
  sortByOnPress(payload: SortStatusType): void;
  onPressSecondInnings(): void;
  onPressCreateContest(): void;
  onContestCardPress(contest_key: string): void;
  onPressCreateTeam(): void;
}

/**
 * create contest screen type definations
 */
export interface CreateContestType {
  isFetching: boolean;
  userContests: Array<any>;
  err: boolean;
  selContest: any;
  shareSheet:any,
  refetch(): void;
  onPressContestCard(contest_key: string): void;
  onPressShareContest(contest_key: string): void;
  proceedToJoin(contest_key: string): void;
  wallet_amount: string;
}

interface SortStatusType {
  price: boolean | null;
  entry: boolean | null;
}
