export const FLAG_IMG_URL = 'http://kenfg.com/images/flag/';

export const CONTESTFILTERS = [
  {
    id: '1',
    name: 'All',
  },
  {
    id: '2',
    name: 'Free',
  },
  {
    id: '3',
    name: 'Mega',
  },
  {
    id: '4',
    name: 'Premium Pro',
  },
  {
    id: '5',
    name: 'Fireball',
  },
  {
    id: '6',
    name: 'Hot',
  },

  {
    id: '7',
    name: 'Fortune',
  },
  {
    id: '8',
    name: '+5',
  },
];

export const MORECONTESTFILTER = [
  {
    id: '9',
    name: 'Head to Head',
  },
  {
    id: '10',
    name: '5 in 1',
  },
  {
    id: '11',
    name: '3 in 1',
  },
  {
    id: '12',
    name: '10 in 5',
  },
  {
    id: '13',
    name: '2 in 1',
  },
];

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

// used to team formation
export const PLAYER_CAN_BE_SELECTED = 1;
export const PLAYER_ALREADY_SELECTED = 0;
export const PLAYER_DISABLED = -1;

// used while join contest button presseds
export const TO_TEAMLIST = 0;
export const TO_TEAM_FORMATION = 1;

// used wallet screen
export const PAYMENT_OPTION = {
  CREDIT: 0,
  DEBIT: 1,
  NET_BANKING: 2,
  GPAY: 3,
  PHONEPE: 4,
  PAYTM: 5,
  UPI: 6,
};

// DEPRECATED NEED TO REMOVE LATER
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
