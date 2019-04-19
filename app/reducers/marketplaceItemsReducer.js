import * as types from '../constants/actionTypes';

function marketplaceitems(state = {
  items: {
    isFetchingMarketplaceItems: false,
    items: []
  },
  itemsByShop: {
    isFetchingMarketplaceItems: false,
    items: []
  },
  itemsByShopID: {
    isFetchingMarketplaceItems: false,
    items: []
  },
  itemsByCategory: {
    isFetchingMarketplaceItems: false,
    items: []
  }
},action) {
  switch (action.type) {
    case types.REQUEST_MARKETPLACE_ITEMS:
      return Object.assign({}, state, {
        items: {
          isFetchingMarketplaceItems: true,
          items: state.items.items
        }
      });
    case types.RECEIVE_MARKETPLACE_ITEMS:
      let items = [...state.items.items , ...action.items];
      return Object.assign({}, state, {
        items: {
          isFetchingMarketplaceItems: false,
          items: items,
          page: action.page,
          hasNextPage: action.hasNextPage,
          lastUpdated: action.receivedAt
        }
      });
    case types.REQUEST_MARKETPLACE_ITEMS_BY_SHOP:
      return Object.assign({}, state, {
        itemsByShop: {
          isFetchingMarketplaceItems: true,
          items: state.itemsByShop.items
        }
      });
    case types.RECEIVE_MARKETPLACE_ITEMS_BY_SHOP:
      var marketplace_items = [...state.itemsByShop.items , ...action.items];
      return Object.assign({}, state, {
        itemsByShop: {
          isFetchingMarketplaceItems: false,
          items: marketplace_items,
          page: action.page,
          hasNextPage: action.hasNextPage,
          lastUpdated: action.receivedAt
        }
      });
    case types.REQUEST_MARKETPLACE_ITEMS_BY_SHOP_ID:
      return Object.assign({}, state, {
        itemsByShopID: {
          isFetchingMarketplaceItems: true,
          items: state.itemsByShopID.items
        }
      });
    case types.RECEIVE_MARKETPLACE_ITEMS_BY_SHOP_ID:
      var shop_items = [];

      if (action.page === 1) {
        shop_items = action.items;
      } else {
        shop_items = [...state.itemsByShopID.items , ...action.items];
      }
      return Object.assign({}, state, {
        itemsByShopID: {
          isFetchingMarketplaceItems: false,
          items: shop_items,
          page: action.page,
          hasNextPage: action.hasNextPage,
          lastUpdated: action.receivedAt
        }
      });
    case types.REQUEST_MARKETPLACE_ITEMS_BY_CATEGORY:
      return Object.assign({}, state, {
        itemsByCategory: {
          isFetchingMarketplaceItems: true,
          items: state.itemsByCategory.items
        }
      });
    case types.RECEIVE_MARKETPLACE_ITEMS_BY_CATEGORY:
      var category_items = [];

      if (action.page === 1) {
        category_items = action.items;
      } else {
        category_items = [...state.itemsByCategory.items , ...action.items];
      }

      return Object.assign({}, state, {
        itemsByCategory: {
          isFetchingMarketplaceItems: false,
          items: category_items,
          page: action.page,
          hasNextPage: action.hasNextPage,
          lastUpdated: action.receivedAt
        }
      });
    default:
      return state;
  }
}

export default marketplaceitems;
