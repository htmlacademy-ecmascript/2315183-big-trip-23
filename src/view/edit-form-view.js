import { humanizeDueDate, isListElementHaveOffers } from '../view/utils/list.js';
import { DateFormat, EVENTS, PLACES, DESCRIPTION } from '../const.js';
import { getRandomArrayElement, getRandomNumber } from './utils/common.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

const PICTURES_COUNT = 5;

const BLANK_FORM = {
  dueDate: new Date(),
  event: getRandomArrayElement(EVENTS),
  place: getRandomArrayElement(PLACES),
  time: {
    from: new Date(),
    to: new Date()
  },
  price: 0,
  offers: null,
  isImportant: false,
  description: getRandomArrayElement(DESCRIPTION),
  pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
};

function createEventDataInPhotoTemplate(event) {
  return (`<label class="event__type  event__type-btn" for="event-type-toggle-1">
  <span class="visually-hidden">Choose event type</span>
  <img class="event__type-icon" width="17" height="17" src="img/icons/${event.toLowerCase()}.png" alt="Event type icon">
  </label>`);
}

function createDestinationInfoTemplate(event, place) {
  return (`<label class="event__label  event__type-output" for="event-destination-1">
  ${event}
  </label>
  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${place}" list="destination-list-1">
  <datalist id="destination-list-1">
    <option value="Amsterdam"></option>
    <option value="Geneva"></option>
    <option value="Chamonix"></option>
  </datalist>`);
}

function createTimeInEventTemplate(timeFrom, timeTo) {
  return (`<label class="visually-hidden" for="event-start-time-1">From</label>
  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${timeFrom}">
  &mdash;
  <label class="visually-hidden" for="event-end-time-1">To</label>
  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${timeTo}">`);
}

function createDestinationDescriptionTemplate(description, pictures) {
  return (`<h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>
  <div class="event__photos-container">
    <div class="event__photos-tape">
    ${Object.entries(pictures).map((picture) => `<img class="event__photo" src="${picture[1]}" alt="Event photo"></img>`).join('')}
    </div>
  </div>`);
}

function createOffersEditTemplate(offers, isAnyOffers) {
  let count = 0;

  if (isAnyOffers) {
    return (`<div class="event__available-offers">
    ${Object.entries(offers).map((offer) => {
        count++;
        return (`<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${count}"
    name="event-offer-luggage" type="checkbox"  ${offer[1].isChecked ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${count}">
      <span class="event__offer-title">${offer[1].name}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer[1].price}</span>
    </label>
  </div>`);
      }).join('')}
  </div>`);
  } else {
    return (`<div class="event__available-offers">
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage">
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">Add luggage</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">50</span>
      </label>
    </div>

    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort">
      <label class="event__offer-label" for="event-offer-comfort-1">
        <span class="event__offer-title">Switch to comfort</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">80</span>
      </label>
    </div>

    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
      <label class="event__offer-label" for="event-offer-meal-1">
        <span class="event__offer-title">Add meal</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">15</span>
      </label>
    </div>

    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
      <label class="event__offer-label" for="event-offer-seats-1">
        <span class="event__offer-title">Choose seats</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">5</span>
      </label>
    </div>

    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
      <label class="event__offer-label" for="event-offer-train-1">
        <span class="event__offer-title">Travel by train</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">40</span>
      </label>
    </div>`);
  }
}

function createEditFormTemplate(editFormElement) {
  const { event, place, time, price, description, pictures, offers, isAnyOffers} = editFormElement;

  const timeFrom = humanizeDueDate(time.from, DateFormat.DAY_AND_TIME_EVENT);
  const timeTo = humanizeDueDate(time.to, DateFormat.DAY_AND_TIME_EVENT);

  return (`<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
    <div class="event__type-wrapper">
    ${createEventDataInPhotoTemplate(event)}
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>

          <div class="event__type-item">
            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
    ${createDestinationInfoTemplate(event, place)}
    </div>

    <div class="event__field-group  event__field-group--time">
    ${createTimeInEventTemplate(timeFrom, timeTo)}
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
    </header>
    <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      ${createOffersEditTemplate(offers, isAnyOffers)}

    </section>

    <section class="event__section  event__section--destination">
    ${createDestinationDescriptionTemplate(description, pictures)}
    </section>
  </section>
  </form></li>`);
}

export default class EditFormView extends AbstractStatefulView {
  #handleFormSubmit = null;
  #handleCancelEditForm = null;

  constructor({editFormElement = BLANK_FORM, onFormSubmit, onCancelEditForm}) {
    super();
    this._setState(EditFormView.parseListElementToState(editFormElement));

    this.#handleFormSubmit = onFormSubmit;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);

    this.#handleCancelEditForm = onCancelEditForm;

    this._restoreHandlers();
  }

  get template() {
    return createEditFormTemplate(this._state);
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#cancelEditFormHandle);

    this.element.querySelector('.event__type-toggle').addEventListener('click', this.#eventTypeToggleHandler);
    this.element.querySelector('.event__input--destination').addEventListener('click', () => {});

    this.element.querySelector('#event-start-time-1').addEventListener('click', () => {});
    this.element.querySelector('#event-end-time-1').addEventListener('click', () => {});

    this.element.querySelector('.event__available-offers').addEventListener('click', this.#offersChangeToggleHandler);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditFormView.parseStateToListElement(this._state));
  };

  #cancelEditFormHandle = (evt) => {
    evt.preventDefault();
    this.#handleCancelEditForm();
  };

  #eventTypeToggleHandler = (evt) => {
    evt.preventDefault();
  };

  #offersChangeToggleHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      isAnyOffers: !this._state.isAnyOffers
    });
  };

  static parseListElementToState(listElement) {
    return {...listElement,
      isAnyOffers: isListElementHaveOffers(listElement.offers)
    };
  }

  static parseStateToListElement(state) {
    const listElement = {...state};

    if (!listElement.isAnyOffers) {
      listElement.offers.forEach((offer) => {
        offer.isChecked = false;
      });
    }

    delete listElement.isAnyOffers;

    return listElement;
  }
}
