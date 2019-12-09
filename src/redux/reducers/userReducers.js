import { LOGIN_USER, SEND_MESSAGE } from '../actions/actionTypes';
import { loginUser, sendMessage } from '../actions/userActions';

const initState = {
  info: {},
  messages: []
};

export function userReducers(state = initState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        info: action.info
      });
    case SEND_MESSAGE:
      return Object.assign({}, state, {
       messages: [
         ...state.messages,
         {
           text: action.text
         }
       ]
     });
    default:
      return state
  }
}
