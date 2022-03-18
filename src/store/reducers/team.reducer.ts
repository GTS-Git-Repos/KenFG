// team formation reducer

import {
  SAVE_ALL_PLAYERS,
  UPDATE_PLAYERS,
  UPDATE_TEAM_COUNT,
  UPDATE_CREDITS,
  UPDATE_CAPTAIN,
  UPDATE_VC_CAPTAIN,
  CLEAR_TEAM,
  UPDATE_TEAM,
  UPDATE_BLOCKLIST,
  UPDATE_ERROR_MESSAGE,
  UPDATE_LOCK
} from '../actions/actionTypes';

// TODO: is team_a, team_b is used anywhere ? I think no, need to refactor laterw

const initialState = {
  lock:false,
  all_players: [],
  teams: ['', ''],
  team_a: null,
  team_b: null,
  players: [],
  cap_key: null,
  vc_key: null,
  block_list: [],
  credits_left: 100,
  team_count: {},
  error_message: {},
};

interface actionShape {
  type: string;
  payload: any;
}

const Team = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case UPDATE_LOCK:{
      return {
        ...state,
        lock:action.payload
      }
    }
    case SAVE_ALL_PLAYERS: {
      return {
        ...state,
        all_players: action.payload,
      };
    }
    case UPDATE_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case UPDATE_ERROR_MESSAGE: {
      return {
        ...state,
        error_message: action.payload,
      };
    }
    case UPDATE_TEAM: {
      return {
        ...state,
        teams: action.payload,
      };
    }
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
    case UPDATE_CAPTAIN:
      return {
        ...state,
        cap_key: action.payload,
      };
    case UPDATE_VC_CAPTAIN:
      return {
        ...state,
        vc_key: action.payload,
      };
    case UPDATE_BLOCKLIST: {
      return {
        ...state,
        block_list: action.payload,
      };
    }
    case CLEAR_TEAM: {
      return {
        ...state,
        players: [],
        cap_key: null,
        vc_key: null,
        credits_left: 100,
      };
    }

    default:
      return state;
  }
};

export default Team;
