import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge(newState, state, { [action.currentUser.id]: action.currentUser })
    default:
      return state;
  }
};

export default usersReducer;