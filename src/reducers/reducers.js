import { combineReducers } from 'redux-seamless-immutable';
import Immutable from 'seamless-immutable';
import {
  SELECT_REDDIT, INVALIDATE_REDDIT,
  REQUEST_POSTS, RECEIVE_POSTS,
  CHANGE_FILTER
} from '../constants/ActionTypes';

export function selectedReddit(state = 'angularjs', action) {
  switch (action.type) {
  case SELECT_REDDIT:
    return action.reddit;
  default:
    return state;
  }
}

function posts(state = Immutable({
  isFetching: false,
  didInvalidate: false,
  items: []
}), action) {
  switch (action.type) {
  case INVALIDATE_REDDIT:
    return state.set('didInvalidate', true);
  case REQUEST_POSTS:
    return state.merge({
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_POSTS:
    return state.merge({
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

export function postsByReddit(state = Immutable({ }), action) {
  switch (action.type) {
  case INVALIDATE_REDDIT:
  case RECEIVE_POSTS:
  case REQUEST_POSTS:
    return state.set(action.reddit, posts(state[action.reddit], action));
  default:
    return state;
  }
}

export function currentFilter(state = '', action) {
  switch (action.type) {
  case CHANGE_FILTER:
    return action.payload;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
  currentFilter
});

export default rootReducer;
