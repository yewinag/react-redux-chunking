import * as types from '../constants/actionTypes';
import {headers, image} from '../constants/endpoints';

const requestImageLimit = () => ({type: types.REQUEST_IMAGE_LIMIT});

const receiveImageLimit = (imageLimit, shopProductLimit) => ({
  type: types.RECEIVE_IMAGE_LIMIT,
  imageLimit,
  shopProductLimit
});

const shouldFetchImageLimit = () => true;

const fetchImageLimit = state => dispatch => {
  dispatch(requestImageLimit());
  fetch(image.getLimit(), {
    headers: headers.getAuthHeaders(state.user)
  })
    .then(response => response.json())
    .then(json => dispatch(receiveImageLimit(json.limit,json.shop_product_limit)));
};

export const fetchImageLimitIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchImageLimit()) {
    return dispatch(fetchImageLimit(getState()));
  }
};
