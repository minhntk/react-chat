import { getLocalStorageItem, setLocalStorageItem } from '../utils/Storage';
import { AUTH_TOKEN } from '../constant/constant';

export function isAuthenticated() {
  return !!getLocalStorageItem(AUTH_TOKEN);
}

export function setAuthenticatedToken(token) {
  setLocalStorageItem(AUTH_TOKEN, token);
}
