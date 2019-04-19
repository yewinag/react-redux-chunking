import * as types from '../../constants/actionTypes';

const requestYears = () =>  ({ type: types.GENERATE_YEARS });

const shouldGenerateYears = state => state.years.isGenerating;

const yearsPopulated = items => ({
  type: types.YEARS_POPULATED,
  items,
  receivedAt: Date.now()
});

const generateYears = (from = 2016, to = 1924) => dispatch => {
  dispatch(requestYears());

  let years = [];
  let placeHolder = { value: 'Any Year' };

  for (let value = from; value >= to; --value) {
    let year = { value };
    years = [...years, year];
  }

  dispatch(yearsPopulated([placeHolder, ...years]));
};

export const generateYearsIfNeeded = () => (dispatch, getState) => {
  if (shouldGenerateYears(getState())) {
    return dispatch(generateYears());
  }
};
