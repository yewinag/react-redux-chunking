import * as types from '../constants/actionTypes';

const navBar = (state = {
  activeMenuItem: null,
  options: {
    showDialog: false,
    title: '',
    menu: '',
    displayHomeAsUp: false,
  },
  showRefApp: true,
  navDrawer: false
}, action) => {
  switch (action.type) {
    case types.SHOW_DIALOG:
      return Object.assign({}, state, {
        options: {
          type : action.type,
          showDialog : action.showDialog,
          title: state.options.title,
          menu: state.options.menu
        }
      });
    case types.HIDE_DIALOG:
      return Object.assign({}, state, {
        options: {
          type : action.type,
          showDialog : action.showDialog
        }
      });
    case types.SET_ACTIVE_MENU_ITEM:
      return Object.assign({}, state, {
        activeMenuItem: action.activeItem
      });
    case types.SET_OPTIONS:
      return Object.assign({}, state, {
        options: {
          type : action.type,
          title: action.title,
          menu: action.menu,
          displayHomeAsUp: action.displayHomeAsUp
        }
      });
    case types.TOGGLE_NAV_BAR:
      return Object.assign({}, state, {
        navDrawer: !state.navDrawer
      })
    default:
      return state;
  }
};

export default navBar;
