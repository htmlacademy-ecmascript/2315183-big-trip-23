import { getCurrentDestination, getNeededOffers, humanizeDueDate } from '../utils/list.js';
import { DateFormat, destinationsFromServer, offersFromServer } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';
import dayjs from 'dayjs';

function createDateElementTemplate(timeFrom, timeTo, totalDuraction) {
  return (`
  <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${timeFrom}">${timeFrom}</time>
          &mdash;
          <time class="event__end-time" datetime="${timeTo}">${timeTo}</time>
        </p>
        <p class="event__duration">${totalDuraction}</p>
      </div>`);
}

function createOffersTemplate(offers) {
  return Object.entries(offers).map((offer) => (`<li class="event__offer">
    <span class="event__offer-title">${offer[1].title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer[1].price}</span>
    </li>`)).join('');
}

function createFavoriteButtonTemplate(isFavorite) {
  return (`<button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
  <span class="visually-hidden">Add to favorite</span>
  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
  </svg>
</button>`);
}

function createListElementTemplate(listElement, allOffers, allDestinations) {
  const { type, destination, dateFrom, dateTo, basePrice, isFavorite, offers } = listElement;
  const { name } = getCurrentDestination(allDestinations, destination);

  const currentOffers = getNeededOffers(allOffers, type, offers);

  const date = humanizeDueDate(dateFrom, DateFormat.DAY_EVENT);
  const from = humanizeDueDate(dateFrom, DateFormat.TIME);
  const to = humanizeDueDate(dateTo, DateFormat.TIME);

  const dayDuraction = dayjs(dateFrom).diff(dateTo, 'd') * (-1);
  const hourDuraction = dayjs(dateFrom).diff(dateTo, 'h') % 24 * (-1);
  const minuteDuraction = dayjs(dateFrom).diff(dateTo, 'm') % 60 * (-1);
  const totalDuraction = `${dayDuraction !== 0 ? `${dayDuraction}D` : ''}
    ${hourDuraction !== 0 ? `${hourDuraction}H` : ''}
    ${minuteDuraction !== 0 ? `${minuteDuraction}M` : ''}`;

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${date}">${date}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${name}</h3>

      ${createDateElementTemplate(from, to, totalDuraction)}

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>

      <ul class="event__selected-offers">
      ${createOffersTemplate(currentOffers)}
      </ul>

      ${createFavoriteButtonTemplate(isFavorite)}

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}

export default class ListElementView extends AbstractView{
  #listElement = null;
  #offers = [];
  #destinations = '';

  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({listElement, offers = offersFromServer, destinations = destinationsFromServer, onEditClick, onFavoriteClick}) {
    super();
    this.#listElement = listElement;
    this.#offers = offers;
    this.#destinations = destinations;

    this.#handleEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);

    this.#handleFavoriteClick = onFavoriteClick;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createListElementTemplate(this.#listElement, this.#offers, this.#destinations);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #favoriteClickHandler = () => {
    this.#handleFavoriteClick();
  };

}
