export const FLAG_IMG_URL = 'http://kenfg.com/images/flag/';

export const APP_COLORS = {
  darkMode: {
    bg: {
      backgroundColor: '#0D1320', // dark black
    },
    bg_1: {
      backgroundColor: '#172338', // semi dark
    },
    bg_2: {
      backgroundColor: '#d1b45a', // golden yellow
    },
    bg_3: {
      backgroundColor: '#121D2E', // medium dark
    },
    txt_1: {
      color: '#FFFFFF', // pure white text
    },
    txt_2: {
      color: '#614920', // golder text
    },
    txt_3: {
      color: '#8797B1', // semi dark text
    },
  },
  lightMode: {
    bg: {
      backgroundColor: '#E5E5E5', // shade white
    },
    bg_1: {
      backgroundColor: '#FFFFFF', // pure white
    },
    bg_2: {
      backgroundColor: '#9C181E', // red
    },
    bg_3: {
      backgroundColor: '#E0E0E0', // dark shade white
    },
    txt_1: {
      color: '#4F4F4F', // gray text
    },
    txt_2: {
      color: '#9C181E', // red text
    },
    txt_3: {
      color: '#0D1320', // dark text
    },
  },
};

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

export const TO_TEAMLIST = 0;
export const TO_TEAM_FORMATION = 1;

export const PAYMENT_OPTION = {
  CREDIT: 0,
  DEBIT: 1,
  NET_BANKING: 2,
  GPAY: 3,
  PHONEPE: 4,
  PAYTM: 5,
  UPI: 6,
};

// export const maxRoles: any = {
//   // not used
//   bowler: 4,
//   batsman: 6,
//   keeper: 4,
//   all_rounder: 4,
// };
// export const minRoles: any = {
//   // not used
//   bowler: 3,
//   batsman: 3,
//   keeper: 1,
//   all_rounder: 1,
// };
