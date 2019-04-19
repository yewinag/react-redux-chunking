import {amiValue} from '../constants/constants';

export const calculateBasicPremium = (engine_power, price, actOfGod = true, warRisk = true, theft = true) => {
  let ami_result = {
    nilExcess: 2000
  };
  let amiEngineKey = calculateEngineKey(engine_power);
  let amiPrice = normalizePrice(price);
  let amiWindScreen = calculateWindScreen(price);
  let total = 0;

  ami_result.basicPremium = parseInt(amiValue.data[amiEngineKey][amiPrice]);
  ami_result.thirdParty = parseInt(amiValue.thirdPartyData[amiEngineKey]);
  ami_result.windScreen = amiWindScreen;
  ami_result.srcc = price * 100000 * 0.0005;
  ami_result.warRisk = calculateWarOfRisk(ami_result.srcc, warRisk);
  ami_result.actOfGod = calculateActOfGod(ami_result.srcc, actOfGod);
  ami_result.theft = calculateTheft(ami_result.basicPremium, theft);
  total = ami_result.basicPremium +
    ami_result.thirdParty +
    ami_result.windScreen +
    ami_result.nilExcess +
    ami_result.srcc +
    ami_result.actOfGod +
    ami_result.warRisk +
    ami_result.theft;
  ami_result.total = total;
  return ami_result;
};
const calculateEngineKey = (engine_power) => {
  let engineKey;
  switch (true) {
    case (engine_power <= 1500):
      engineKey = 'u15';
      break;
    case (engine_power <= 2000):
      engineKey = 'r20';
      break;
    case (engine_power <= 3000):
      engineKey = 'r30';
      break;
    case (engine_power <= 4000):
      engineKey = 'r40';
      break;
    case (engine_power > 4000):
      engineKey = 'a40';
      break;
    default:
  }
  return engineKey;
};

const calculateWindScreen = (price) => {
  let windScreen;
  switch (true) {
    case (price <= 300):
      windScreen = 300000;
      break;
    case (price <= 500):
      windScreen = 500000;
      break;
    case (price <= 700):
      windScreen = 700000;
      break;
    case (price <= 1000):
      windScreen = 1000000;
      break;
    case (price <= 1500):
      windScreen = 1500000;
      break;
    default:
      windScreen = 2000000;
  }
  windScreen *= 0.05;
  return windScreen;
};

const normalizePrice = (price) => {
  let normalizedPrice;
  switch (true) {
    case (price <= 50):
      normalizedPrice = 50;
      break;
    case (price >= 3000):
      normalizedPrice = 3000;
      break;
    default:
      normalizedPrice = price;
  }
  if (normalizedPrice > 1000) {
    normalizedPrice = Math.round(normalizedPrice / 100) * 100;
  } else {
    normalizedPrice = Math.round(normalizedPrice / 10) * 10;
  }
  return normalizedPrice;
};

export const calculateWarOfRisk = (srcc, checked) => {
  return checked ? srcc : 0;
};

export const calculateActOfGod = (srcc, checked) => {
  return checked ? srcc : 0;
};

export const calculateTheft = (basicPremium, checked) => {
  return checked ? basicPremium * 0.15 : 0;
};
