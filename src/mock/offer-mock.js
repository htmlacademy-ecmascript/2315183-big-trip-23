import { getRandomArrayElement, getRandomTrueOrFalse } from '../view/utils/common.js';

const mockOffers = [
  {
    name: 'Order Uber',
    price: 20,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Switch to comfort',
    price: 80,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Add luggage',
    price: 50,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'With pets',
    price: 40,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Add lunch',
    price: 10,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Rent a car',
    price: 200,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Lunch in city',
    price: 30,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Long rent',
    price: 100,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Add breakfast',
    price: 50,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Switch to comfort',
    price: 80,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Add transfer',
    price: 20,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Book tickets',
    price: 50,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'VIP ticket',
    price: 200,
    isChecked: getRandomTrueOrFalse()
  },
  {
    name: 'Trip guide',
    price: 5,
    isChecked: getRandomTrueOrFalse()
  }
];

function getRandomOffer() {
  return getRandomArrayElement(mockOffers);
}

export { getRandomOffer };
