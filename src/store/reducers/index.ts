import {combineReducers} from 'redux';

import app from './app.reducer';
import user from './user.reducer';
import team from './team.reducer';
import match from './match.reducer';

export default combineReducers({
  app,
  user,
  team,
  match,
});
