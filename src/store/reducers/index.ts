import {combineReducers} from 'redux';

import app from './appReducer';
import user from './userReducer';
import team from './teamReducer';

export default combineReducers({
  app,
  user,
  team,
});
