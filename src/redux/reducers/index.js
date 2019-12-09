import { userReducers } from './userReducers';
import { combineReducers } from 'redux';

const chatApp = combineReducers({
  userReducers
})

export default chatApp;
