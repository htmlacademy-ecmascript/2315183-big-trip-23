import { DESTINATIONS, EVENTS, PLACES } from '../const.js';
import { getRandomArrayElement, getRandomNumber } from '../view/utils/common.js';
import OffersModel from '../model/offer-model.js';

const PICTURES_COUNT = 5;

const mockWaypoints = [
  {
    dueDate: new Date('2024-04-30'),
    event: getRandomArrayElement(EVENTS),
    place: getRandomArrayElement(PLACES),
    time: {
      from: new Date(2024, 4, 30, 14, 0),
      to: new Date(2024, 4, 30, 20, 0)
    },
    price: 20,
    offers: new OffersModel().getOffer(),
    isImportant: false,
    destination: getRandomArrayElement(DESTINATIONS),
    pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
  },
  {
    dueDate: new Date('2024-05-12'),
    event: getRandomArrayElement(EVENTS),
    place: getRandomArrayElement(PLACES),
    time: {
      from: new Date(2024, 5, 12, 8, 25),
      to: new Date(2024, 5, 12, 11, 0)
    },
    price: 150,
    offers: new OffersModel().getOffer(),
    isImportant: true,
    destination: getRandomArrayElement(DESTINATIONS),
    pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
  },
  {
    dueDate: new Date('2024-08-12'),
    event: getRandomArrayElement(EVENTS),
    place: getRandomArrayElement(PLACES),
    time: {
      from: new Date(2024, 8, 12, 14, 30),
      to: new Date(2024, 8, 14, 18, 0)
    },
    price: 1000,
    offers: new OffersModel().getOffer(),
    isImportant: false,
    destination: getRandomArrayElement(DESTINATIONS),
    pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
  },
  {
    dueDate: new Date('2024-01-30'),
    event: getRandomArrayElement(EVENTS),
    place: getRandomArrayElement(PLACES),
    time: {
      from: new Date(2024, 1, 30, 3, 15),
      to: new Date(2024, 1, 30, 13, 0)
    },
    price: 60,
    offers: new OffersModel().getOffer(),
    isImportant: true,
    destination: getRandomArrayElement(DESTINATIONS),
    pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
  },
];

function getRandomWaypoint() {
  return getRandomArrayElement(mockWaypoints);
}

export { getRandomWaypoint };
