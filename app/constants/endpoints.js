import {API_URL, API_KEY} from './credentials.js';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export const getTotalCarCount = () => (
  fetch(`${API_URL}/used_car_listings/count?api_key=${API_KEY}`)
);

export const searchSimilarCars = (manufacturerName, modelName, year) => {
  let query = `manu:"${manufacturerName}" model:"${modelName}" year:${year}`;

  return fetch(`${API_URL}/used_car_listings.json?q=${query}&api_key=${API_KEY}`);
};

export const incrementLead = (leadableId, leadableType) => (
  fetch(`${API_URL}/leads?api_key=${API_KEY}`, {
    method: 'POST',
    headers: headers.getHeaders(),
    body: JSON.stringify({
      leadable_id: leadableId,
      leadable_type: leadableType
    })
  })
);

export const createImpression = carId => (
  fetch(`${API_URL}/used_car_listings/${carId}/impressions?api_key=${API_KEY}`, {
    method: 'POST'
  })
);

export const createImpressionACMProduct = (shopId, productSlug) => (
  fetch(`${API_URL}/marketplace/shops/${shopId}/products/${productSlug}/impressions.json?api_key=${API_KEY}`, {
    headers: headers.getHeaders(),
    method: 'POST'
  })
);

export const createImpressionACMShop = shopId => (
  fetch(`${API_URL}/marketplace/shops/${shopId}/impressions.json?api_key=${API_KEY}`, {
    headers: headers.getHeaders(),
    method: 'POST'
  })
);

export const listCar = (car, user) => (
  fetch(`${API_URL}/used_car_listings?api_key=${API_KEY}`, {
    body: JSON.stringify(car),
    headers: headers.getAuthHeaders(user),
    method: 'POST'
  })
);

export const campaignListCar = car => (
  fetch(`${API_URL}/marketing/listings?api_key=${API_KEY}`, {
    body: JSON.stringify(car),
    headers: headers.getHeaders(),
    method: 'POST'
  })
);

export const editCar = (carId, car, user) => (
  fetch(`${API_URL}/used_car_listings/${carId}?api_key=${API_KEY}`, {
    body: JSON.stringify(car),
    headers: headers.getAuthHeaders(user),
    method: 'PUT'
  })
);

export const loadCarDetails = carSlug => (
  fetch(`${API_URL}/used_car_listings/${carSlug}?api_key=${API_KEY}`)
);

export const headers = {
  getAuthHeaders(user) {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-User-Login': user.email !== null ? user.email : user.user.contact_number,
      'X-User-Token': user.auth_token
    };
  },
  getHeaders() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }
};

export const news = {
  get(page, category, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/news/${category}?api_key=${apiKey}&page=${page}&`;
  }
};

export const getNews = (page, category) => (
  fetch(news.get(page, category))
);

export const upgrade = {
  put(carSlug, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/used_car_listings/${carSlug}/upgrade?api_key=${apiKey}`;
  }
};

export const car = {
  get(carSlug, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/used_car_listings/${carSlug}?api_key=${apiKey}`;
  },
  post(apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/used_car_listings?api_key=${apiKey}`;
  },
  put(carId, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/used_car_listings/${carId}?api_key=${apiKey}`;
  },
  visibility(carId, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/used_car_listings/${carId}/visibility?api_key=${apiKey}`;
  },
  markSold(carId, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/used_car_listings/${carId}/sale?api_key=${apiKey}`;
  }
};

export const image = {
  delete(carId, imageId, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/used_car_listings/${carId}/images/${imageId}?api_key=${apiKey}`;
  },
  getLimit(apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/images/limit?api_key=${apiKey}`;
  },
  post(carSlug, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/used_car_listings/${carSlug}/images.json?api_key=${apiKey}`;
  },
  order(carSlug, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/used_car_listings/${carSlug}/images/order?api_key=${apiKey}`;
  }
};

export const manufacturers = {
  get: `//${API_URL}/manufacturers?api_key=${API_KEY}`
};

export const models = {
  get: `//${API_URL}/models?api_key=${API_KEY}`
};

export const buildTypes = {
  get: `//${API_URL}/build_types?api_key=${API_KEY}`
};

export const locations = {
  get: `//${API_URL}/locations?api_key=${API_KEY}`
};

export const colors = {
  get: `//${API_URL}/colors?api_key=${API_KEY}`
};

export const wishList = {
  getIds: `//${API_URL}/wishlisted_listings?api_key=${API_KEY}&only=ids`,
  get(page, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/wishlisted_listings?api_key=${apiKey}&page=${page}`;
  }
};

export const ami = {
  post: `//${API_URL}/ami?api_key=${API_KEY}`
};

export const dashboard = {
  get(page, scope, apiURL = API_URL, apiKey = API_KEY) {
    return `//${apiURL}/dashboard?api_key=${apiKey}&page=${page}&scope=${scope}`;
  }
};

export const profile = {
  get: `//${API_URL}/profile?api_key=${API_KEY}`
};

export const loadBrandNewManufacturerData = () => (
  fetch(`${API_URL}/brand_new/manufacturers?api_key=${API_KEY}`)
);

export const loadBrandNewFeaturedModelData = () => (
  fetch(`${API_URL}/brand_new/featured?api_key=${API_KEY}`)
);

export const loadBrandNewModelsData = slug => (
  fetch(`${API_URL}/brand_new/manufacturers/${slug}/models?api_key=${API_KEY}`)
);

export const loadBrandNewModelDetailData = slug => (
  fetch(`${API_URL}/brand_new/models/${slug}?api_key=${API_KEY}&spec_categories=1`)
);

export const sendTestDriveData = (testDrive) => (
  fetch(`${API_URL}/test_drive/leads?api_key=${API_KEY}`, {
    method: 'POST',
    headers: headers.getHeaders(),
    body: JSON.stringify(testDrive)
  })
);

export const incrementManufacturersImpression = id => (
  fetch(`${API_URL}/brand_new/manufacturers/${id}/impressions?api_key=${API_KEY}`, {
    method: 'POST'
  })
);

export const incrementModelsImpression = slug => (
  fetch(`${API_URL}/brand_new/models/${slug}/impressions?api_key=${API_KEY}`, {
    method: 'POST'
  })
);

export const incrementDealersImpression = id => (
  fetch(`${API_URL}/brand_new/dealers/${id}/impressions?api_key=${API_KEY}`, {
    method: 'POST'
  })
);

export const reqResetPasswordToken = code => (
  fetch(`${API_URL}/phone_number/reset-password?api_key=${API_KEY}`, {
    method: 'POST',
    headers: headers.getHeaders(),
    body: JSON.stringify({
      user:{
        code: code
      }
    })
  })
);

export const resetPasswordWithPhoneNumber = params => (
  fetch(`${API_URL}/phone_number/reset-password?api_key=${API_KEY}`, {
    method: 'PUT',
    headers: headers.getHeaders(),
    body: JSON.stringify(params)
  })
);

export const changePhoneNumber = (user, code) => (
  fetch(`${API_URL}/profile/update_phone_number?api_key=${API_KEY}`, {
    method: 'PUT',
    headers: headers.getAuthHeaders(user),
    body: JSON.stringify({
      user:{
        code: code
      }
    })
  })
);

export const getCreditTransaction = (user, page) => (
  fetch(`${API_URL}/credit_transaction?page=${page}&api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getAuthHeaders(user)
  })
);

export const getCreditPackage = user => (
  fetch(`${API_URL}/credit_package?api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getAuthHeaders(user)
  })
);

export const parchaseCredit = (user, creditOrder) => (
  fetch(`${API_URL}/credit?api_key=${API_KEY}`, {
    method: 'POST',
    headers: headers.getAuthHeaders(user),
    body: JSON.stringify(creditOrder)
  })
);

export const bumpListing = (user, id) => (
  fetch(`${API_URL}/used_car_listings/${id}/bump?api_key=${API_KEY}`, {
    method: 'PUT',
    headers: headers.getAuthHeaders(user)
  })
);

export const getListingPosition = (user, ids) => (
  fetch(`${API_URL}/used_car_listings/positions?api_key=${API_KEY}&ids=${ids}`, {
    method: 'GET',
    headers: headers.getAuthHeaders(user)
  })
);

export const getCarPosition = (user, slug) => (
  fetch(`${API_URL}/used_car_listings/${slug}/position?api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getAuthHeaders(user)
  })
);

export const getCarOrder = (user, id) => (
  fetch(`${API_URL}/orders/${id}?api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getAuthHeaders(user)
  })
);

export const upgradeTopSpot = (user, slug, topSpotOrder) => (
  fetch(`${API_URL}/used_car_listings/${slug}/upgrade_top_spot?api_key=${API_KEY}`, {
    method: 'PUT',
    headers: headers.getAuthHeaders(user),
    body: JSON.stringify(topSpotOrder)
  })
);
export const sendPremiumPlusData = data => (
  fetch(`${API_URL}/used_car_listings/premium_plus_subscribe?api_key=${API_KEY}`, {
    method: 'POST',
    headers: headers.getHeaders(),
    body: JSON.stringify(data)
  })
);
export const getCharInfo = (user, slug, selectedMode) => (
  fetch(`${API_URL}/used_car_listings/${slug}/stats?scope=${selectedMode}&api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getAuthHeaders(user)
  })
);

export const getDealers = (dealerName, page) => (
  fetch(`${API_URL}/dealers?q=${dealerName}&page=${page}&api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getHeaders()
  })
);

export const getShopCategories = () => (
  fetch(`${API_URL}/directory/categories.json?api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getHeaders()
  })
);

export const subscribeShop = (shop, user) => (
  fetch(`${API_URL}/marketplace/shops/subscription?api_key=${API_KEY}`, {
    body: JSON.stringify(shop),
    headers: headers.getAuthHeaders(user),
    method: 'POST'
  })
);

export const updateShop = (slug, shop, user) => (
  fetch(`${API_URL}/marketplace/shops/${slug}?api_key=${API_KEY}`, {
    body: JSON.stringify(shop),
    headers: headers.getAuthHeaders(user),
    method: 'PUT'
  })
);

export const getProductCategory = () => (
  fetch(`${API_URL}/marketplace/product_categories?api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getHeaders()
  })
);
export const createProduct = (product, user) => (
  fetch(`${API_URL}/marketplace/shops/${product.marketplace_product.shop_id}/products?api_key=${API_KEY}`, {
    body: JSON.stringify(product),
    headers: headers.getAuthHeaders(user),
    method: 'POST'
  })
);
export const getProductDetail = (shopSlug,productSlug) => (
  fetch(`${API_URL}/marketplace/shops/${shopSlug}/products/${productSlug}.json/?api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getHeaders()
  })
);
export const addProductImage = (productSlug,image, user) => (
  fetch(`${API_URL}/marketplace/products/${productSlug}/images?api_key=${API_KEY}`, {
    body: JSON.stringify(image),
    headers: headers.getAuthHeaders(user),
    method: 'POST'
  })
);
export const getUserShopDetail = (user) => (
  fetch(`${API_URL}/marketplace/my_shop?api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getAuthHeaders(user)
  })
);
export const getShopProducts = (page ,user) =>(
  fetch(`${API_URL}/marketplace/my_shop_products?api_key=${API_KEY}&page=${page}`,{
    method : "GET",
    headers: headers.getAuthHeaders(user)
  })
);
export const getShopProductsHidden = (page, user) =>(
  fetch(`${API_URL}/marketplace/my_shop_products?api_key=${API_KEY}&scope=hidden&page=${page}`,{
    method : "GET",
    headers: headers.getAuthHeaders(user)
  })
);
export const editProduct = (shopSlug, product, user) => (
  fetch(`${API_URL}/marketplace/shops/${shopSlug}/products/${product.marketplace_product.product_slug}?api_key=${API_KEY}`, {
    body: JSON.stringify(product),
    headers: headers.getAuthHeaders(user),
    method: 'PUT'
  })
);
export const removeProductImage = (productSlug, imageId, user) => (
  fetch(`${API_URL}/marketplace/products/${productSlug}/image/${imageId}?api_key=${API_KEY}`, {
    method: 'DELETE',
    headers: headers.getAuthHeaders(user)
  })
);
export const hideShopProduct = (shopSlug, productSlug, user) => (
  fetch(`${API_URL}/marketplace/shops/${shopSlug}/products/${productSlug}/visibility?api_key=${API_KEY}`, {
    method: 'DELETE',
    headers: headers.getAuthHeaders(user)
  })
);
export const showShopProduct = (shopSlug, productSlug, user) => (
  fetch(`${API_URL}/marketplace/shops/${shopSlug}/products/${productSlug}/visibility?api_key=${API_KEY}`, {
    method: 'POST',
    headers: headers.getAuthHeaders(user)
  })
);
export const addShopExtension = (shopSlug, marketplaceShop, user) => (
  fetch(`${API_URL}/marketplace/shops/${shopSlug}/extend_order?api_key=${API_KEY}`, {
    method: 'POST',
    body: JSON.stringify(marketplaceShop),
    headers: headers.getAuthHeaders(user)
  })
);
export const removeShopBanner = (slug, user) => (
  fetch(`${API_URL}/marketplace/shops/${slug}/banner?api_key=${API_KEY}`, {
    headers: headers.getAuthHeaders(user),
    method: 'DELETE'
  })
);
export const removeShopLogo = (slug, user) => (
  fetch(`${API_URL}/marketplace/shops/${slug}/logo?api_key=${API_KEY}`, {
    headers: headers.getAuthHeaders(user),
    method: 'DELETE'
  })
);
export const getMarketPlaceShopProduct = (page ,shopSlug) =>(
  fetch(`${API_URL}/marketplace/products.json?shop_slug=${shopSlug}&page=${page}&api_key=${API_KEY}`,{
    method : "GET"
  })
);
export const addSaveSearch = (saveSearch, user) =>(
  fetch(`${API_URL}/saved_searches?api_key=${API_KEY}`,{
    body: JSON.stringify(saveSearch),
    headers: headers.getAuthHeaders(user),
    method : "POST"
  })
);
export const getMySaveSearch = (page, user) =>(
  fetch(`${API_URL}/saved_searches?api_key=${API_KEY}&page=${page}`,{
    method : "GET",
    headers: headers.getAuthHeaders(user)
  })
);
export const deleteMySaveSearch = (id, user) =>(
  fetch(`${API_URL}/saved_searches/${id}.json?api_key=${API_KEY}`,{
    method : "DELETE",
    headers: headers.getAuthHeaders(user)
  })
);
export const updateSaveSearch = (item, user) =>(
  fetch(`${API_URL}/saved_searches/${item.id}.json?api_key=${API_KEY}`,{
    body: JSON.stringify(item),
    headers: headers.getAuthHeaders(user),
    method : "PUT"
  })
);
export const getMyShopProductDetail = (productSlug,user) => (
  fetch(`${API_URL}/marketplace/my_products/${productSlug}?api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getAuthHeaders(user)
  })
);
export const getPremiumAssistCar = () => (
  fetch(`${API_URL}/used_car_listings.json?set=premium_assist_listings&api_key=${API_KEY}`, {
    method: 'GET'
  })
);
export const getPremiumDealerLimited = (user) => (
  fetch(`${API_URL}/orders/dealer_listing_limit?api_key=${API_KEY}`, {
    method: 'GET',
    headers: headers.getAuthHeaders(user)
  })
);
export const upgradePremiumDealerListing = (carSlug, user) => (
  fetch(`${API_URL}/used_car_listings/${carSlug}/upgrade_dealer_listing?api_key=${API_KEY}`, {
    method: 'PUT',
    body: JSON.stringify(carSlug),
    headers: headers.getAuthHeaders(user)
  })
);
export const getTopSpotCars = () => (
  fetch(`${API_URL}/used_car_listings.json?set=top_spot_listings&api_key=${API_KEY}`,{
    method: "GET"
  })
);
export const getReviewRating = (page, dealerSlug) => (
  fetch(`${API_URL}/reviewee/${dealerSlug}?&api_key=${API_KEY}page=${page}`,{
    method: "GET"
  })
);
export const sentReview = (data,userId,user) =>(
  fetch(`${API_URL}/reviewee/${userId}/review?api_key=${API_KEY}`,{
    body: JSON.stringify(data),
    headers: headers.getAuthHeaders(user),
    method : "POST"
  })
);
export const getReview = (userId, user) => (
  fetch(`${API_URL}/reviewee/${userId}/review?api_key=${API_KEY}`,{
    headers: headers.getAuthHeaders(user),
    method : "GET"
  })
);
export const updateReview = (data, userId, user) => (
  fetch(`${API_URL}/reviewee/${userId}/review?api_key=${API_KEY}`,{
    body: JSON.stringify(data),
    headers: headers.getAuthHeaders(user),
    method : "PUT"
  })
);
export const getCreditSellTypes = () => (
  fetch(`${API_URL}/products?api_key=${API_KEY}`,{
    headers: headers.getHeaders(),
    method : "GET"
  })
);
export const validatesUsername = (user) => (
  fetch(`${API_URL}/validates_username?api_key=${API_KEY}`,{
    method : "POST",
    headers: headers.getHeaders(),
    body: JSON.stringify(user)
  })
);

export const sendReport = (user, data) => {
  return fetch(`${API_URL}/reports.json?api_key=${API_KEY}`,{
    method : "POST",
    headers: headers.getAuthHeaders(user),
    body: JSON.stringify(data)
  })
};

export const searchLotNumber = (number) => (
  fetch(`${API_URL}/used_car_listings/${number}?api_key=${API_KEY}`,{
    headers: headers.getHeaders(),
    method: "GET"
  })
);
export const getProductImpression = (shopSlug, productSlug) => (
  fetch(`${API_URL}/marketplace/shops/${shopSlug}/products/${productSlug}/stats?api_key=${API_KEY}`,{
    headers: headers.getHeaders(),
    method : "GET"
  })
);
export const sendPremiumAssistData = data => (
  fetch(`${API_URL}/premium_assist/subscribe?api_key=${API_KEY}`, {
    method: 'POST',
    headers: headers.getHeaders(),
    body: JSON.stringify(data)
  })
);
export const sendCheckedPlateNumber = number => (
  fetch(`${API_URL}/used_car_listings/check_licence_number?licence_number=${number}&api_key=${API_KEY}`,{
    method: 'GET',
    headers: headers.getHeaders(),
  })
);
export const getFeatureComparison = () => (
  fetch(`${API_URL}/brand_new/compare?api_key=${API_KEY}`, {
    method: "GET",
    headers: headers.getHeaders(),
  })
);
export const getPopularSearchCars = () => (
  fetch(`${API_URL}/popular_searches?api_key=${API_KEY}`, {
    method: "GET",
    headers: headers.getHeaders(),
  })
);
export const initialGetUserNotification = (user) => (
  fetch(`${API_URL}/users/notifications?api_key=${API_KEY}`,{
    method : "GET",
    headers: headers.getAuthHeaders(user)
  })
)
export const getUserNotification = (user, timestamp) => (
  fetch(`${API_URL}/users/notifications?less_than=${timestamp}&api_key=${API_KEY}`,{
    method : "GET",
    headers: headers.getAuthHeaders(user)
  })
)
export const sentReadNotificationItem = (timestamp, user) => (
  fetch(`${API_URL}/users/notifications/${timestamp}/read?api_key=${API_KEY}`, {
    method: 'PUT',
    headers: headers.getAuthHeaders(user)
  })
)
export const sentReadAllNotification = (user) => (
  fetch(`${API_URL}/users/notifications/mark_all_as_read?api_key=${API_KEY}`, {
    method: 'PUT',
    headers: headers.getAuthHeaders(user)
  })
)
export const getNotificationUnreadCount = (user) => (
  fetch(`${API_URL}/users/notifications/total_unread?api_key=${API_KEY}`,{
    method : "GET",
    headers: headers.getAuthHeaders(user)
  })
)
