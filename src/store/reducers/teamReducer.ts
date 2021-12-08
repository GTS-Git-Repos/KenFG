import {
  UPDATE_PLAYERS,
  UPDATE_TEAM_COUNT,
  UPDATE_CREDITS,
} from '../actions/actionTypes';

const PRELOAD_PLAYERS = [
  {
    cap: false,
    credits: 9,
    key: 'f_0',
    name: 'Player 0',
    points: 3,
    seasonal_role: 'keeper',
    selected_by: '96%',
    team_key: 'eng',
    vc: false,
  },
  {
    cap: false,
    credits: 8,
    key: 'f_1',
    name: 'Player 1',
    points: 3,
    seasonal_role: 'keeper',
    selected_by: '96%',
    team_key: 'aus',
    vc: false,
  },
  {
    cap: false,
    credits: 8.5,
    key: 'f_2',
    name: 'Player 2',
    points: 3,
    seasonal_role: 'keeper',
    selected_by: '96%',
    team_key: 'aus',
    vc: false,
  },
  {
    cap: false,
    credits: 8,
    key: 'f_3',
    name: 'Player 3',
    points: 3,
    seasonal_role: 'keeper',
    selected_by: '96%',
    team_key: 'eng',
    vc: false,
  },
  {
    cap: false,
    credits: 9,
    key: 'f_4',
    name: 'Player 4',
    points: 3,
    seasonal_role: 'batsman',
    selected_by: '96%',
    team_key: 'eng',
    vc: false,
  },
  {
    cap: false,
    credits: 8,
    key: 'f_5',
    name: 'Player 5',
    points: 3,
    seasonal_role: 'batsman',
    selected_by: '96%',
    team_key: 'eng',
    vc: false,
  },
  {
    cap: false,
    credits: 8,
    key: 'f_9',
    name: 'Player 9',
    points: 3,
    seasonal_role: 'batsman',
    selected_by: '96%',
    team_key: 'aus',
    vc: false,
  },
  {
    cap: false,
    credits: 9,
    key: 'f_12',
    name: 'Player 12',
    points: 3,
    seasonal_role: 'all_rounder',
    selected_by: '96%',
    team_key: 'aus',
    vc: false,
  },
  {
    cap: false,
    credits: 7,
    key: 'f_13',
    name: 'Player 13',
    points: 3,
    seasonal_role: 'all_rounder',
    selected_by: '96%',
    team_key: 'eng',
    vc: false,
  },
  {
    cap: false,
    credits: 9,
    key: 'f_22',
    name: 'Player 22',
    points: 3,
    seasonal_role: 'bowler',
    selected_by: '96%',
    team_key: 'aus',
    vc: false,
  },
  {
    cap: false,
    credits: 9,
    key: 'f_19',
    name: 'Player 19',
    points: 3,
    seasonal_role: 'bowler',
    selected_by: '96%',
    team_key: 'aus',
    vc: false,
  },
];

const initialState = {
  teams: ['aus', 'eng'],
  players: PRELOAD_PLAYERS,
  credits_left: 100,
  teams_count: null,
};

interface actionShape {
  type: string;
  payload: any;
}

const Team = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case UPDATE_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case UPDATE_TEAM_COUNT:
      return {
        ...state,
        team_count: action.payload,
      };
    case UPDATE_CREDITS:
      return {
        ...state,
        credits_left: action.payload,
      };

    default:
      return state;
  }
};

export default Team;
