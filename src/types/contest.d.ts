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
  onContestCardPress(contest_key: string): void;
  onPressCreateTeam(): void;
}

interface SortStatusType {
  price: boolean | null;
  entry: boolean | null;
}
