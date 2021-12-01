import {HANDLE_ERROR, SAVE_IP} from '../actions/actionTypes';

const initialState = {
  error: null,
  ip: null,
};

interface actionShape {
  type: string;
  payload: any;
}

const App = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case HANDLE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SAVE_IP:
      return {
        ...state,
        ip: action.payload,
      };
    default:
      return state;
  }
};

export default App;
