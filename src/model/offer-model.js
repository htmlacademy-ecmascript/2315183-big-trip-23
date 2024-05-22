import { getRandomOffer } from '../mock/offer-mock.js';

const OFFER_COUNT = 5;

export default class OffersModel {
  offers = Array.from({length: OFFER_COUNT}, getRandomOffer);

  getOffer() {
    return this.offers;
  }
}
