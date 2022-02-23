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
      color: '#614920', // golden text
    },
    txt_3: {
      color: '#8797B1', // semi dark text
    },
    txt_4: {
      color: '#FFFFFF', // pure white text
    },
    // for non invertable colors
    dgdt: {
      color: '#4F4F4F', // dark mode golden text
    },
    dsmt: {
      color: '#8797B1', // dark semi dark text
    },
    ldt: {
      color: '#0D1320', // light mode dark text
    },
    dwt: {
      color: '#FFFFFF', // dark mode white text
    },
  },
  lightMode: {
    bg: {
      backgroundColor: '#E0E0E0', // shade white
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
    txt_4: {
      color: '#FFFFFF', // white text
    },
    // for non invertable colors
    lgt: {
      color: '#4F4F4F', // light mode gray text
    },
    lrt: {
      color: '#9C181E', // light mode red text
    },
    ldt: {
      color: '#0D1320', // light mode dark text
    },
    lwt: {
      color: '#FFFFFF', // light mode white text
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
