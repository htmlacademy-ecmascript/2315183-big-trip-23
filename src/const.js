const EVENTS = [
  'Taxi',
  'Flight',
  'Drive',
  'Check-in',
  'Sightseeing'
];

const PLACES = [
  'Amsterdam',
  'Chamonix',
  'Geneva',
  'Soul',
  'Moscow'
];

const OFFERS = [
  'Order Uber +€  20',
  'Add luggage +€  50',
  'Switch to comfort +€  80',
  'Rent a car +€  200',
  'Add breakfast +€  50',
  ''
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

export { EVENTS, PLACES, OFFERS, DESCRIPTION, DateFormat, FilterType };
