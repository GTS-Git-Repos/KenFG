import {
  UPDTAE_MATCH_META,
  UPDATE_MY_CONTESTS,
  UPDATE_MY_TEAMS,
  UPDATE_LOADING,
  UPDATE_MATCH_PLAYERS,
} from '../actions/actionTypes';

const initialState = {
  matchMeta: null,
  mycontest: null,
  myteams: [],
  match_players: [],
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
    case UPDATE_MY_TEAMS:
      return {
        ...state,
        myteams: action.payload,
      };
    case UPDATE_MATCH_PLAYERS:
      return {
        ...state,
        match_players: action.payload,
      };
    default:
      return state;
  }
};

export default Match;
