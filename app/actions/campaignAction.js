import * as types from '../constants/actionTypes';
import {API_URL, API_KEY} from '../constants/credentials';


const requestSaveListing = data => ({
  type: types.SAVE_CAMPAIGN_LISTING,
  payload: data,
  receivedAt: Date.now()
});

const requestRemoveListing = data => ({
  type: types.REMOVE_CAMPAIGN_LISTING,
});
export const saveListing = (car) => dispatch =>{
  dispatch(requestSaveListing(car));
}

export const removeListing = () => dispatch =>{
  dispatch(requestRemoveListing());
}