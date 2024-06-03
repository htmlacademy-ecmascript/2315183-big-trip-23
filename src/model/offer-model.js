import { getNeedOffer } from '../mock/offer-mock.js';

export default class OffersModel {
  getOffer(type) {
    return getNeedOffer(type);
  }
}
