export const rolesConstraints: any = {
  keeper: {
    min: 1,
    max: 4,
  },
  batsman: {
    min: 3,
    max: 6,
  },
  all_rounder: {
    min: 1,
    max: 4,
  },
  bowler: {
    min: 3,
    max: 6,
  },
};

export const PLAYER_CAN_BE_SELECTED = 1;
export const PLAYER_ALREADY_SELECTED = 0;
export const PLAYER_DISABLED = -1;

export const PAYMENT_OPTION = {
  CREDIT: 0,
  DEBIT: 1,
  NET_BANKING: 2,
  GPAY: 3,
  PHONEPE: 4,
  PAYTM: 5,
  UPI: 6,
};

export const maxRoles: any = {
  // not used
  bowler: 4,
  batsman: 6,
  keeper: 4,
  all_rounder: 4,
};
export const minRoles: any = {
  // not used
  bowler: 3,
  batsman: 3,
  keeper: 1,
  all_rounder: 1,
};

export const FLAG_IMG_URL = 'http://kenfg.com/images/flag/';
