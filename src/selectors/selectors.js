import { createSelector } from 'reselect'

const EMPTY_ITEMS = {
  items: [],
  isFetching: true
};

const getSelectedRedditObject = (state) => {
  return state.postsByReddit[state.selectedReddit] || EMPTY_ITEMS;
}

const getIsFetching = (state) => {
  return getSelectedRedditObject(state).isFetching;
}

const getSelectedItems = (state) => {
  return getSelectedRedditObject(state).items;
}

const getFilter = (state) => {
  return state.currentFilter;
}

const getFilteredItems = createSelector(
  getSelectedItems,
  getFilter,
  (items, filter) => items.filter((item) => {
    return item.title.toLowerCase().indexOf(filter.toLowerCase()) != -1;
  })
);

const getFilteredItemsCount = createSelector(
  getFilteredItems,
  (items) => items.length
);


export {
  getSelectedRedditObject,
  getIsFetching,
  getSelectedItems,
  getFilter,
  getFilteredItems,
  getFilteredItemsCount
}
