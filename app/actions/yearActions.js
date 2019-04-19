import * as types from '../constants/actionTypes';

const requestYears = () =>  ({ type: types.GENERATE_YEARS });

const shouldGenerateYears = state => state.years.isGenerating || state.years.items.length === 0;

const yearsPopulated = items => ({
  type: types.YEARS_POPULATED,
  items,
  receivedAt: Date.now()
});

const generateYears = (insertAny , from = 2016, to = 1924) => dispatch => {
  dispatch(requestYears());
  // generate years
  let years = [];

  for (let value = from; value >= to; --value) {
    let year = { value };
    years.push(year);
  }

  years = insertQueries(years);
  let placeHolder = {value: 'Any Year', query: ''};
  dispatch(yearsPopulated([placeHolder, ...years]));
};

const insertQueries = data => {
  let years = [];

  data.forEach(item => {
    item.query = `year:${item.value}`;      // @yethu: is this right format?
    years.push(item);
  });

  return years;
};

export const generateYearsIfNeeded = (insertAny = false) => (dispatch, getState) => {
  if (shouldGenerateYears(getState())) {
    return dispatch(generateYears(insertAny));
  }
};
