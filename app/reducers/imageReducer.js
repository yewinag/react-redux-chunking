import * as types from '../constants/actionTypes';

const images = (state = {
  isFetchingImageLimit: false,
  imageLimit: 0
}, action) => {
  switch (action.type) {
    case types.REQUEST_IMAGE_LIMIT:
      return Object.assign({}, state, {
        isFetchingImageLimit: true
      });
    case types.RECEIVE_IMAGE_LIMIT:
      return Object.assign({}, state, {
        isFetchingImageLimit: false,
        imageLimit: action.imageLimit,
        productImageLimit : action.shopProductLimit
      });
    default:
      return state;
  }
};

export default images;
