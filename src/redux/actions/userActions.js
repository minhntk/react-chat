import { LOGIN_USER, SEND_MESSAGE } from './actionTypes';

export function loginUser(info) {
  return {
    type: LOGIN_USER,
    info
  };
}

export function sendMessage(text) {
  return {
    type: SEND_MESSAGE, 
    text
  };
}
