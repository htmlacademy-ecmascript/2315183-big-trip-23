import { getRandomArrayElement, getRandomNumber } from '../utils/common.js';
import OffersModel from '../model/offer-model.js';
import { nanoid } from 'nanoid';
import DestinationModel from '../model/destination-model.js';

const RandomPrice = {
  MIN: 10,
  MAX: 10000
};

const mockWaypoints = [
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-12T14:30:08.628Z',
    dateTo: '2024-07-13T11:21:08.628Z',
    destination: new DestinationModel().getDestination('Tokyo'),
    isFavorite: false,
    offers: new OffersModel().getOffer('bus'),
    type: 'bus'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-15T02:38:08.628Z',
    dateTo: '2024-07-15T12:14:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('flight'),
    type: 'flight'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-17T07:11:08.628Z',
    dateTo: '2024-07-18T13:27:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('ship'),
    type: 'ship'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-19T11:51:08.628Z',
    dateTo: '2024-07-20T22:02:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('check-in'),
    type: 'check-in'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-21T11:28:08.628Z',
    dateTo: '2024-07-21T22:17:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('flight'),
    type: 'flight'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-22T04:34:08.628Z',
    dateTo: '2024-07-22T14:28:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('check-in'),
    type: 'check-in'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-23T22:54:08.628Z',
    dateTo: '2024-07-25T09:19:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: false,
    offers: new OffersModel().getOffer('sightseeing'),
    type: 'sightseeing'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-27T00:55:08.628Z',
    dateTo: '2024-07-28T10:32:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFfavorite: true,
    offers: new OffersModel().getOffer('check-in'),
    type: 'check-in'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-30T00:15:08.628Z',
    dateTo: '2024-07-30T14:13:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('train'),
    type: 'train'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-07-31T21:11:08.628Z',
    dateTo: '2024-08-02T01:47:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: false,
    offers: new OffersModel().getOffer('bus'),
    type: 'bus'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-03T02:27:08.628Z',
    dateTo: '2024-08-03T23:29:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('bus'),
    type: 'bus'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-04T21:56:08.628Z',
    dateTo: '2024-08-05T12:05:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('drive'),
    type: 'drive'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-06T08:07:08.628Z',
    dateTo: '2024-08-07T03:12:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('flight'),
    type: 'flight'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-09T00:54:08.628Z',
    dateTo: '2024-08-10T16:09:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: false,
    offers: new OffersModel().getOffer('bus'),
    type: 'bus'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-12T14:10:08.628Z',
    dateTo: '2024-08-14T11:09:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('restaurant'),
    type: 'restaurant'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-15T07:52:08.628Z',
    dateTo: '2024-08-17T03:20:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: false,
    offers: new OffersModel().getOffer('ship'),
    type: 'ship'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-18T19:06:08.628Z',
    dateTo: '2024-08-20T05:57:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: false,
    offers: new OffersModel().getOffer('sightseeing'),
    type: 'sightseeing'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-20T22:56:08.628Z',
    dateTo: '2024-08-22T00:40:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('check-in'),
    type: 'check-in'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-22T10:27:08.628Z',
    dateTo: '2024-08-24T00:10:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: false,
    offers: new OffersModel().getOffer('restaurant'),
    type: 'restaurant'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-24T10:36:08.628Z',
    dateTo: '2024-08-25T20:14:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: false,
    offers: new OffersModel().getOffer('sightseeing'),
    type: 'sightseeing'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-26T20:56:08.628Z',
    dateTo: '2024-08-28T06:02:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('restaurant'),
    type: 'restaurant'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-08-29T19:18:08.628Z',
    dateTo: '2024-08-30T05:55:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('sightseeing'),
    type: 'sightseeing'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-09-01T03:08:08.628Z',
    dateTo: '2024-09-01T22:06:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: false,
    offers: new OffersModel().getOffer('check-in'),
    type: 'check-in'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-09-02T22:33:08.628Z',
    dateTo: '2024-09-03T07:01:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: true,
    offers: new OffersModel().getOffer('flight'),
    type: 'flight'
  },
  {
    basePrice: getRandomNumber(RandomPrice.MIN, RandomPrice.MAX),
    dateFrom: '2024-09-04T06:37:08.628Z',
    dateTo: '2024-09-06T04:56:08.628Z',
    destination: new DestinationModel().getDestination(),
    isFavorite: false,
    offers: new OffersModel().getOffer('taxi'),
    type: 'taxi'
  }
];

function getRandomWaypoint() {
  return {
    id: nanoid(),
    ...getRandomArrayElement(mockWaypoints)
  };
}

export { getRandomWaypoint };
