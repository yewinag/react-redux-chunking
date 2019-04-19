import {API_URL, API_KEY} from '../constants/credentials';

export const getManufacturers = timestamp => {
  let manufacturers = JSON.parse(localStorage.getItem('r_manufacturers'));

  if (!!manufacturers && manufacturers.manufacturer_changed_at === timestamp) {
    return new Promise((resolve, reject) => {
      resolve(manufacturers);
    });
  }

  return fetch(`${API_URL}/manufacturers?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      data.manufacturer_changed_at = timestamp;
      let jsonData = JSON.stringify(data);
      localStorage.setItem('r_manufacturers', jsonData);
      return data;
    });
};

export const getModels = timestamp => {
  let models = JSON.parse(localStorage.getItem('r_models'));

  if (!!models) {
    return new Promise((resolve, reject) => {
      resolve(models);
    });
  }

  return fetch(`${API_URL}/models?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      data.model_changed_at = timestamp;
      let jsonData = JSON.stringify(data);
      localStorage.setItem('r_models', jsonData);
      return data;
    });
};

export const getYears = () => {
  let years = [];
  for (let i = 1920; i <= 2018; ++i) {
    years = [...years, i];
  }

  return years;
};

export const getBuildTypes = timestamp => {
  let buildTypes = JSON.parse(localStorage.getItem('r_buildTypes'));

  if (!!buildTypes) {
    return new Promise((resolve, reject) => {
      resolve(buildTypes);
    });
  }

  return fetch(`${API_URL}/build_types?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      data.build_type_changed_at = timestamp;
      let jsonData = JSON.stringify(data);
      localStorage.setItem('r_buildTypes', jsonData);
      return data;
    });
};

export const getLocations = timestamp => {
  let locations = JSON.parse(localStorage.getItem('r_locations_new'));

  if (!!locations) {
    return new Promise((resolve, reject) => {
      resolve(locations);
    });
  }
  return fetch(`${API_URL}/locations?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      data.location_changed_at = timestamp;
      let jsonData = JSON.stringify(data);
      localStorage.setItem('r_locations_new', jsonData);
      return data;
    });
};

export const getNotifications = () => fetch(`${API_URL}/notifications?api_key=${API_KEY}`);
