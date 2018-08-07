import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default usersReducer;