import * as types from '../constants/actionTypes';

export const showDialog = () => ({
  type: types.SHOW_DIALOG,
  showDialog: true
});

export const hideDialog = () => ({
  type: types.HIDE_DIALOG,
  showDialog: false
});

export const setActiveMenuItem = activeItem => ({
  type: types.SET_ACTIVE_MENU_ITEM,
  activeItem
});

export const setOptions = options => ({
  type: types.SET_OPTIONS,
  title: options.title,
  menu: options.menu,
  displayHomeAsUp: options.displayHomeAsUp
});

export const toggleNavBar = () => ({
  type: types.TOGGLE_NAV_BAR,  
})