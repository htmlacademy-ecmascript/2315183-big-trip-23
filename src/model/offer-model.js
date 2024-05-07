import { getRandomOffer } from '../mock/offer-mock.js';
import { getRandomNumber } from '../view/utils/common.js';

const NumberOfOffer = {
  MIN: 0,
  MAX: 3
};

export default class OffersModel {
  offers = Array.from({length: getRandomNumber(NumberOfOffer.MIN, NumberOfOffer.MAX)}, getRandomOffer);

  getOffer() {
    return this.offers;
  }
}
