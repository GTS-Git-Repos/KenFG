import {
  UPDTAE_MATCH_META,
  UPDATE_MY_CONTESTS,
  UPDATE_USER_TEAMS,
  UPDATE_LOADING,
  UPDATE_PLAYERS_POINTS,
  RESET_INITIAL,
} from '../actions/actionTypes';

const initialState = {
  matchMeta: null,
  mycontest: null,
  myteams: null,
  match_players: null,
  playersMeta: {},
  xis: [],
  loading: true,
  // squad:[]
};

interface actionShape {
  type: string;
  payload: any;
}

const Match = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case UPDTAE_MATCH_META:
      return {
        ...state,
        matchMeta: action.payload.matchMeta,
        playersMeta: action.payload.playersMeta,
        xis: action.payload.xis,
        loading: false,
      };
    case UPDATE_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case UPDATE_MY_CONTESTS:
      return {
        ...state,
        mycontest: action.payload,
      };
    case UPDATE_USER_TEAMS:
      return {
        ...state,
        myteams: action.payload,
      };
    case UPDATE_PLAYERS_POINTS:
      return {
        ...state,
        match_players: action.payload,
      };
    case RESET_INITIAL: {      
      return {
        matchMeta: null,
        mycontest: null,
        myteams: null,
        match_players: null,
        playersMeta: {},
        xis: [],
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default Match;
