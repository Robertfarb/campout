import * as SessAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";





export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = currentUser => ({
  type: LOGOUT_CURRENT_USER,
  currentUser
});

export const RECEOVE_SESSION_ERRORS = currentUser => ({
  type: RECEIVE_SESSION_ERRORS,
  currentUser
});