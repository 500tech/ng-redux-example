import * as types from '../constants/ActionTypes';

function changeFilter(filter) {
  return {
    type: types.CHANGE_FILTER,
    payload: filter
  };
}

export default function filterActions() {
  return {
    changeFilter
  };
}
