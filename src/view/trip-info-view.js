import { DateFormat, destinationsFromServer, offersFromServer } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { getNeededOffers, humanizeDueDate } from '../utils/list.js';

function createPlacesDestinationTemlate(waypoints, destinations) {
  const places = waypoints.map((waypoint) => destinations.find(({id}) => id === waypoint.destination).name);
  const fisrtPlace = places[0];
  const lastPlace = places.at(-1);
  const middleplaces = places.slice(1, -1);
  const allUniqCities = new Set(places);

  const uniqPlaces = new Set(middleplaces);

  let count = 0;
  // count - 1: city
  // count - 2: city - city
  // count - 3: city - city - city
  // count - 4: city - ... - city

  switch(uniqPlaces.length) {
    case 0:
      if (fisrtPlace === lastPlace) {
        count = 1;
        break;
      }
      count = 2;
      break;
    case 1:
      if (uniqPlaces[0] === fisrtPlace && uniqPlaces[0] === lastPlace) {
        count = 1;
        break;
      }
      if (uniqPlaces[0] === fisrtPlace || uniqPlaces[0] === lastPlace) {
        count = 2;
        break;
      }
      count = 3;
      break;
    case 2:
      if (uniqPlaces[0] === fisrtPlace && uniqPlaces[1] === lastPlace) {
        count = 2;
        break;
      }
      if (uniqPlaces[0] === fisrtPlace || uniqPlaces[1] === lastPlace) {
        count = 3;
        break;
      }
      count = 4;
      break;
    case 3:
      if (uniqPlaces[0] === fisrtPlace && uniqPlaces[2] === lastPlace) {
        if (uniqPlaces[1] === uniqPlaces[0] || uniqPlaces[1] === uniqPlaces[2]) {
          count = 2;
          break;
        }
        count = 3;
        break;
      }
      count = 4;
      break;
    default:
      count = 4;
      break;
  }

  switch(count) {
    case 1:
      return `<h1 class="trip-info__title">${fisrtPlace}</h1>`;
    case 2:
      return `<h1 class="trip-info__title">${fisrtPlace} &mdash; ${lastPlace}</h1>`;
    case 3:
      return `<h1 class="trip-info__title">${fisrtPlace} &mdash; ${allUniqCities[1]} &mdash; ${lastPlace}</h1>`;
    case 4:
      return `<h1 class="trip-info__title">${fisrtPlace} &mdash; ... &mdash; ${lastPlace}</h1>`;
  }
}

function createSumOfPricesTempate(waypoints, offers) {
  let sumOfPrice = 0;

  waypoints.forEach((waypoint) => {
    sumOfPrice += waypoint.basePrice;

    const currentOffers = getNeededOffers(offers, waypoint.type, waypoint.offers);
    currentOffers.forEach((offer) => {
      sumOfPrice += offer.price;
    });
  });

  return `<p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${sumOfPrice}</span>
      </p>`;
}

function createTripInfoTemplate(waypoints, offers, destinations) {
  if (waypoints[0] !== undefined) {
    const { dateFrom: dateStart } = waypoints[0];
    const { dateFrom: dateEnd } = waypoints[waypoints.length - 1];
    const start = humanizeDueDate(dateStart, DateFormat.DAY);
    const end = humanizeDueDate(dateEnd, DateFormat.DAY);

    const dateTemplate = `<p class="trip-info__dates">${start}&nbsp;&mdash;&nbsp;${end}</p>`;
    const priceTemplate = createSumOfPricesTempate(waypoints, offers);

    return (`<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
      ${createPlacesDestinationTemlate(waypoints, destinations)}

      ${dateTemplate}
      </div>

      ${priceTemplate}
      </section>`);
  } else {
    return (`<section class="trip-main__trip-info  trip-info">
      </section>`);
  }
}

export default class TripInfoView extends AbstractView {
  #waypoints = [];
  #offers = [];
  #destinations = [];

  constructor({waypoints, offers = offersFromServer, destinations = destinationsFromServer}) {
    super();

    this.#waypoints = waypoints;
    this.#offers = offers;
    this.#destinations = destinations;
  }

  get template() {
    return createTripInfoTemplate(this.#waypoints, this.#offers, this.#destinations);
  }
}
