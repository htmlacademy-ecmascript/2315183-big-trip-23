import { getCurrentDay, humanizeDueDate, isListElementHaveOffers } from '../view/utils/list.js';
import { DateFormat, EVENTS, PLACES, DESCRIPTION } from '../const.js';
import { getRandomArrayElement, getRandomNumber, getUpperCaseFirstLetter } from './utils/common.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import OffersModel from '../model/offer-model.js';

const PICTURES_COUNT = 5;

const BLANK_FORM = {
  dueDate: getCurrentDay(),
  event: getRandomArrayElement(EVENTS),
  place: getRandomArrayElement(PLACES),
  time: {
    from: getCurrentDay(),
    to: new Date()
  },
  price: 0,
  offers: new OffersModel().getOffer(),
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
    ${Object.entries(offers).map((offer) => {
        count++;
        return (`<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${count}"
    name="event-offer-luggage" type="checkbox">
    <label class="event__offer-label" for="event-offer-${count}">
      <span class="event__offer-title">${offer[1].name}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer[1].price}</span>
    </label>
  </div>`);
      }).join('')}
  </div>`);
  }
}

function createSelectTypeEventTemplate(event) {
  return (`<fieldset class="event__type-group">
  <legend class="visually-hidden">Event type</legend>

  ${EVENTS.map((typeOfEvent) => `<div class="event__type-item">
  <input id="event-type-${typeOfEvent.toLowerCase()}-1" class="event__type-input  visually-hidden"
  type="radio" name="event-type" value="${typeOfEvent.toLowerCase()}"
  ${event === typeOfEvent ? 'checked' : ''}>
  <label class="event__type-label  event__type-label--${typeOfEvent.toLowerCase()}" for="event-type-${typeOfEvent.toLowerCase()}-1">${typeOfEvent}</label>
  </div>`).join('')}

  </fieldset>`);
}

function createEditFormTemplate(editFormElement) {
  const { event, place, timeFrom, timeTo, price, description, pictures, offers, isAnyOffers} = editFormElement;

  const from = humanizeDueDate(timeFrom, DateFormat.DAY_AND_TIME_EVENT);
  const to = humanizeDueDate(timeTo, DateFormat.DAY_AND_TIME_EVENT);

  return (`<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
    <div class="event__type-wrapper">
    ${createEventDataInPhotoTemplate(event)}
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        ${createSelectTypeEventTemplate(event)}
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
    ${createDestinationInfoTemplate(event, place)}
    </div>

    <div class="event__field-group  event__field-group--time">
    ${createTimeInEventTemplate(from, to)}
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
  #handleDeleteClick = null;

  #datePickerFrom = null;
  #datePickerTo = null;

  constructor({editFormElement = BLANK_FORM, onFormSubmit, onCancelEditForm, onDeleteClick}) {
    super();
    this._setState(EditFormView.parseListElementToState(editFormElement));

    this.#handleFormSubmit = onFormSubmit;
    this.#handleCancelEditForm = onCancelEditForm;
    this.#handleDeleteClick = onDeleteClick;

    this._restoreHandlers();
  }

  get template() {
    return createEditFormTemplate(this._state);
  }

  removeElement() {
    super.removeElement();

    if(this.#datePickerFrom) {
      this.#datePickerFrom.destroy();
      this.#datePickerFrom = null;
    }
    if(this.#datePickerTo) {
      this.#datePickerTo.destroy();
      this.#datePickerTo = null;
    }
  }

  reset(listElement) {
    this.updateElement(
      EditFormView.parseListElementToState(listElement)
    );
  }

  _restoreHandlers() {
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#cancelEditFormHandle);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClickHandler);

    this.element.querySelector('.event__type-group').addEventListener('click', this.#eventTypeToggleHandler);

    this.element.querySelector('.event__input--price').addEventListener('input', this.#inputToggleHandler);
    this.element.querySelector('.event__input--destination').addEventListener('input', this.#destinationInputHandler);
    this.element.querySelector('.event__available-offers').addEventListener('click', this.#offersChangeToggleHandler);

    this.#setDatePicker();
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(this._state);
    this.#handleFormSubmit(EditFormView.parseStateToListElement(this._state));
  };

  #cancelEditFormHandle = (evt) => {
    evt.preventDefault();
    this.#handleCancelEditForm();
  };

  #formDeleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(EditFormView.parseStateToListElement(this._state));
  };

  #timeFromChangeHandler = ([userDate]) => {
    this.updateElement({
      dueDate: userDate,
      timeFrom: userDate
    });
  };

  #timeToChangeHandler = ([userDate]) => {
    this.updateElement({
      timeTo: userDate
    });
  };

  #eventTypeToggleHandler = (evt) => {
    if (evt.target.value !== undefined) {
      const newEvent = getUpperCaseFirstLetter(evt.target.value);

      this._setState({
        event: newEvent,
        offers:  new OffersModel().getOffer(),
        description: getRandomArrayElement(DESCRIPTION),
        pictures: Array.from({length: PICTURES_COUNT}, () => `https://loremflickr.com/248/152?random=${getRandomNumber(0, 100)}`)
      });

      this.updateElement({
        event: newEvent
      });
    }
  };

  #inputToggleHandler = (evt) => {
    evt.preventDefault();
    this._setState({
      price: evt.target.value,
    });
  };

  #offersChangeToggleHandler = () => {
    const elements = this.element.querySelectorAll('.event__offer-checkbox');

    for(let i = 0; i < this._state.offers.length; i++) {
      if(elements[i].checked) {
        this._state.offers[i].isChecked = true;
        this._state.isAnyOffers = true;
      } else {
        this._state.offers[i].isChecked = false;
      }
    }

    this._setState({
      offers: this._state.offers
    });
  };

  #destinationInputHandler = (evt) => {
    evt.preventDefault();
    this._setState({
      place: evt.target.value
    });
  };

  #setDatePicker() {
    this.#datePickerFrom = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        dateFormat: 'Y-m-d H:i',
        enableTime: true,
        //defaultDate: this._state.timeFrom,
        maxDate: this._state.timeTo,
        // eslint-disable-next-line camelcase
        time_24hr: true,
        onChange: this.#timeFromChangeHandler
      }
    );

    this.#datePickerTo = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        dateFormat: 'Y-m-d H:i',
        enableTime: true,
        defaultDate: this._state.timeTo,
        minDate: this._state.timeFrom,
        // eslint-disable-next-line camelcase
        time_24hr: true,
        onChange: this.#timeToChangeHandler
      }
    );

  }

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
