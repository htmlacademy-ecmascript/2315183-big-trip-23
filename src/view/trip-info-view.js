import { DateFormat, destinationsFromServer, offersFromServer } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { getHeaderInfoRow, getNeededOffers, humanizeDueDate } from '../utils/list.js';

function createSumOfPricesTemplate(waypoints, offers) {
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
    const priceTemplate = createSumOfPricesTemplate(waypoints, offers);

    return (`<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">
        ${getHeaderInfoRow(waypoints, destinations)}
        </h1>

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
