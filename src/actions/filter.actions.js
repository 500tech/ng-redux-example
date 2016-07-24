import { CHANGE_FILTER } from '../constants/ActionTypes';

function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    payload: filter
  };
}

export default function filterActions() {
  return {
    changeFilter
  };
}
