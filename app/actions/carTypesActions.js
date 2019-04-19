import * as types from '../constants/actionTypes';

function requestCarTypes(){
  return {
    type : types.REQUEST_CAR_TYPES
  };
}

function receiveCarTypes(data) {
  return {
    type : types.RECEIVE_CAR_TYPES,
    items : data,
    isReceivedAt : Date.now()
  };
}

function shouldFetchCarTypes() {
  return true;
}

function fetchCarTypes() {
  return dispatch => {
      dispatch(requestCarTypes());
      dispatch(receiveCarTypes(loadCarTypes()));
  };
}

/* TODO @mayayechann
* 0 is not used as id because RadioButtonGroup in material-ui doesnt support
* 0 as key.
*/
function loadCarTypes() {
  return [
    { id: 1, name: 'All Car Type', query: "" },
    { id: 2, name: 'options.filterBy.premium', query: "car_type:\"Premium Car\"" },
    { id: 3, name: 'options.filterBy.premiumDealer', query: "car_type:\"Premium Dealer Car\"" }
  ];
}
export function fetchCarTypesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCarTypes(getState())) {
      return dispatch(fetchCarTypes());
    }
  };
}

export function receiveSelectedCarType(data) {
  return {
    type: types.RECEIVE_SELECTED_CAR_TYPE,
    selectedCarType : data
  };
}
