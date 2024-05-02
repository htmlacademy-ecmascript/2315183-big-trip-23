import { getRandomArrayElement } from '../utils.js';

const mockOffers = [
  {
    name: 'Order Uber',
    price: 20
  },
  {
    name: 'Add luggage',
    price: 50
  },
  {
    name: 'Switch to comfort',
    price: 80
  },
  {
    name: 'Rent a car',
    price: 200
  },
  {
    name: 'Add breakfast',
    price: 50
  },
  {
    name: 'Book tickets',
    price: 50
  },
  {
    name: 'Lunch in city',
    price: 30
  }
];

function getRandomOffer() {
  return getRandomArrayElement(mockOffers);
}

export { getRandomOffer };
