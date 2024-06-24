import { getAllElementsByKey } from './utils/list.js';
import { getDataFromServer } from './utils/server.js';

const {BLANK_FORM, offersFromServer, destinationsFromServer, waypointsApiService} = await getDataFromServer();

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
