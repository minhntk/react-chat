import { userReducers } from './userReducers';
import { combineReducers } from 'redux';

const chatApp = combineReducers({
  userAuth: userReducers
})

export default chatApp;
