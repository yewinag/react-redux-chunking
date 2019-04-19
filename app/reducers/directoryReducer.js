import * as types from '../constants/actionTypes';

const directory = (state = {
  isFetchingCategories: false,
  isFetchingEntries: false,
  items: [],
  entries: {}
}, action) => {
  switch (action.type) {
    case types.REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        isFetchingCategories: true
      });
    case types.RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        isFetchingCategories: false,
        items: action.items,
        lastUpdated: action.receivedAt,
        changedAt: action.changedAt
      });
    case types.REQUEST_ENTRIES:
      return Object.assign({}, state, {
        isFetchingEntries: true
      });
    case types.RECEIVE_ENTRIES:
      state.entries[action.category] = state.entries[action.category] || [];
      state.entries[action.category] = [...state.entries[action.category], ...action.items];
      return Object.assign({}, state, {
        isFetchingEntries: false,
        entries: state.entries,
        lastUpdated: action.receivedAt,
        hasNextPage: action.hasNextPage,
        page: action.page
      });
    default:
      return state;
  }
};

export default directory;
