import { destinationsFromServer, offersFromServer } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { getCurrentDestination } from '../utils/list.js';

function createTripInfoTemplate(waypoints, offers, destinations) {
  if (waypoints[0] !== undefined) {
    if (waypoints.length === 1) {
      const { name: nameFirstOne } = getCurrentDestination(destinations, waypoints[0].destination);
      return (`<section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${nameFirstOne}</h1>

          <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
        </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
        </p>
      </section>`);
    }
    if (waypoints.length === 2) {
      const { name: nameFirstTwo } = getCurrentDestination(destinations, waypoints[0].destination);
      const { name: nameSecondTwo } = getCurrentDestination(destinations, waypoints[waypoints.length - 1].destination);
      return (`<section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${nameFirstTwo} &mdash; ${nameSecondTwo}</h1>

          <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
        </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
        </p>
      </section>`);
    }
    if (waypoints.length === 3) {
      const { name: nameFirstThree } = getCurrentDestination(destinations, waypoints[0].destination);
      const { name: nameSecondThree } = getCurrentDestination(destinations, waypoints[1].destination);
      const { name: nameThird } = getCurrentDestination(destinations, waypoints[waypoints.length - 1].destination);
      return (`<section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${nameFirstThree} &mdash; ${nameSecondThree} &mdash; ${nameThird}</h1>

          <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
        </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
        </p>
      </section>`);
    }
    const { name: nameFirst } = getCurrentDestination(destinations, waypoints[0].destination);
    const { name: nameSecond } = getCurrentDestination(destinations, waypoints[waypoints.length - 1].destination);
    return (`<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${nameFirst} &mdash; ... &mdash; ${nameSecond}</h1>

      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  </section>`);
  }
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">... &mdash; ...</h1>

      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  </section>`;
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
