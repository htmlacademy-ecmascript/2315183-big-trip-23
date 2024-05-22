import { DESCRIPTION, EVENTS, PLACES } from '../const.js';
import { getRandomArrayElement, getRandomNumber } from '../view/utils/common.js';
import OffersModel from '../model/offer-model.js';
import { nanoid } from 'nanoid';

const PICTURES_COUNT = 5;

const RandomPrice = {
  MIN: 10,
  MAX: 2000
};

const mockWaypoints = [
  {
    dueDate: new Date('2024-04-30'),
    event: getRandomArrayElement(EVENTS),
    place: getRandomArrayElement(PLACES),
    timeFrom: new Date(2024, 4, 30, 14, 0),
    timeTo: new Date(2024, 4, 30, 20, 0),
    price: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    offers: new OffersModel().getOffer(),
    isFavorite: false,
    description: getRandomArrayElement(DESCRIPTION),
    pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
  },
  {
    dueDate: new Date('2024-05-12'),
    event: getRandomArrayElement(EVENTS),
    place: getRandomArrayElement(PLACES),
    timeFrom: new Date(2024, 5, 12, 8, 25),
    timeTo: new Date(2024, 5, 12, 11, 5),
    price: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    offers: new OffersModel().getOffer(),
    isFavorite: true,
    description: getRandomArrayElement(DESCRIPTION),
    pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
  },
  {
    dueDate: new Date('2024-08-12'),
    event: getRandomArrayElement(EVENTS),
    place: getRandomArrayElement(PLACES),
    timeFrom: new Date(2024, 8, 12, 14, 35),
    timeTo: new Date(2024, 8, 14, 18, 0),
    price: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    offers: new OffersModel().getOffer(),
    isFavorite: false,
    description: getRandomArrayElement(DESCRIPTION),
    pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
  },
  {
    dueDate: new Date('2024-01-30'),
    event: getRandomArrayElement(EVENTS),
    place: getRandomArrayElement(PLACES),
    timeFrom: new Date(2024, 1, 30, 3, 15),
    timeTo: new Date(2024, 1, 30, 13, 0),
    price: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    offers: new OffersModel().getOffer(),
    isFavorite: true,
    description: getRandomArrayElement(DESCRIPTION),
    pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
  },
  {
    dueDate: new Date('2024-05-7'),
    event: getRandomArrayElement(EVENTS),
    place: getRandomArrayElement(PLACES),
    timeFrom: new Date(2024, 5, 7, 22, 15),
    timeTo: new Date(2024, 5, 7, 23, 25),
    price: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    offers: new OffersModel().getOffer(),
    isFavorite: true,
    description: getRandomArrayElement(DESCRIPTION),
    pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
  },
];

function getRandomWaypoint() {
  return {
    id: nanoid(),
    ...getRandomArrayElement(mockWaypoints)
  };
}

export { getRandomWaypoint };
