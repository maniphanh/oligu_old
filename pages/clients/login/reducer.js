import {LOGIN_SUCCESS, LOGIN_FAILED, LOG_OFF} from './actionTypes';

export const loginReducer = (state = {user: null, status: LOG_OFF}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {user: action.user, status: action.type};
    case LOGIN_FAILED:
      return {user: null, status: action.type};
    case LOG_OFF:
      return {user: null, status: action.type};
    default:
      return state;
  }
};
