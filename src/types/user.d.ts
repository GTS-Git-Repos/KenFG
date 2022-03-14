//  The types declartion for user entities

export interface UserMetaType {
  user_id: string;
  mobile: string;
  mobile_verify_code: any;
  name: string;
  dob: string;
  email: any;
  gender: any;
  bonus: string;
  winnings: string;
  un_utilized: string;
  allow_sms: any;
  make_me_visible: any;
  address: any;
  city: any;
  pincode: any;
  state: any;
  country: any;
  modified_at: string;
  created_at: string;
  wallet_lock: string;
  pan_card_num: string;
  pan_name: string;
  pan_image: string;
  pan_dob: string;
  verified_kyc: string;
  pan_state: string;
  profile_img: string;
  bank_ac: string;
  bank_name: string;
  bank_branch: string;
  bank_proof_img: string;
  bank_ifsc: string;
  bank_state: string;
  verified_bank: string;
  refered_by: string;
  referral_code: string;
}

export interface NotificationScreenType {
  activeFilter: any;
  updateFilter(filter: string): void;
  ntfi: Array<any> | undefined;
  ntfi_l: boolean;
  ntfi_e: boolean;
  openNotification(key: string);
  rfNtfi(): void;
  filterSheet: any;
}

export interface UserStatsType {
  career: {
    winRate: number;
    total_won: number;
    total_matches: number;
    total_series: number;
    total_contests: number;
    since: string;
  };

  matches: Array<PlayedMatchType>;
}

export interface PlayedMatchType {
  match_key: string;
  teams: {
    a: {
      key: string;
      code: string;
      name: string;
    };
    b: {
      key: string;
      code: string;
      name: string;
    };
    match_result: string;
    total_team: number;
    ken_team_points: number;
    won: boolean | number;
  };
}
