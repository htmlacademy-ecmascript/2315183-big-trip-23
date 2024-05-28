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

const PLACES = [
  'Amsterdam',
  'Chamonix',
  'Geneva',
  'Soul',
  'Moscow'
];

const DESCRIPTION = [
  'The mysterious ancient city of Machu Picchu: lost in the mountains of Peru, this archaeological complex leaves visitors in awe with its mystery and beauty',
  'The idyllic beach on Bora Bora Island: with white sand, warm azure water, and palm trees, this beach is the perfect place for relaxation and leisure',
  'The picturesque vineyards of the Tuscany region: famous for their wines and beautiful landscapes, these vineyards create a unique atmosphere inviting you to enjoy the beauty and flavors of the region',
  'The snow-capped peaks of the Swiss Alps: majestic mountain peaks covered in snow offer a breathtaking view and a perfect location for winter sports',
  'The mystical Yavari forest in Brazil: known for its diverse flora and fauna, this forest exudes a special aura of mystery and enigma'
];

const DateFormat = {
  DAY_EVENT: 'MMM D',
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
  MAJOR: 'MAJOR'
};

const StatusOfForm = {
  EDIT: 'EDIT',
  ADD: 'ADD'
};

export { EVENTS, PLACES, DESCRIPTION, DateFormat, FilterType, SortType, UserAction, UpdateType, StatusOfForm };
