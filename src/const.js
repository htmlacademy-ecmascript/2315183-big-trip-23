import { getAllElementsByKey } from './utils/common.js';
import WaypointsApiService from './waypoints-api-service.js';

const AUTHORIZATION = 'Basic k8v5s7m2h9z';
const END_POINT = 'https://23.objects.htmlacademy.pro/big-trip';

const waypointsApiService = new WaypointsApiService(END_POINT, AUTHORIZATION);
const offersFromServer = await waypointsApiService.offers;
const destinationsFromServer = await waypointsApiService.destinations;

destinationsFromServer.push({
  id: '1',
  description: '',
  name: '',
  pictures: []
});

const BLANK_FORM = {
  basePrice: 0,
  dateFrom: new Date(),
  dateTo: new Date(),
  destination: destinationsFromServer.find((destination) => destination.id === '1').id,
  isFavorite: false,
  offers: [],
  type: 'flight'
};

const EVENTS = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant'
];

const PLACES = getAllElementsByKey(destinationsFromServer, 'name');

const DateFormat = {
  DAY_EVENT: 'MMM D',
  DAY: 'D MMM',
  DAY_AND_TIME_EVENT: 'MM/DD/YYYY HH:mm',
  TIME: 'HH:mm'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
  EVENT: 'event',
  OFFER: 'offer'
};

const UserAction = {
  UPDATE_LIST_ELEMENT: 'UPDATE_LIST_ELEMENT',
  ADD_LIST_ELEMENT: 'ADD_LIST_ELEMENT',
  DELETE_LIST_ELEMENT: 'DELETE_LIST_ELEMENT'
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

const StatusOfForm = {
  EDIT: 'EDIT',
  ADD: 'ADD'
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export {
  EVENTS,
  PLACES,
  DateFormat,
  FilterType,
  SortType,
  UserAction,
  UpdateType,
  StatusOfForm,
  offersFromServer,
  destinationsFromServer,
  BLANK_FORM,
  waypointsApiService,
  Mode
};
