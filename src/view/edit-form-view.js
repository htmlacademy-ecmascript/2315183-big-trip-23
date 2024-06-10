import { getCurrentDestination, getCurrentDestinationByName, getNeededOffers, getOffersByType, humanizeDueDate, isListElementHaveOffers } from '../utils/list.js';
import { DateFormat, EVENTS, PLACES, StatusOfForm, BLANK_FORM, offersFromServer, destinationsFromServer } from '../const.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

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
  <input class="event__input  event__input--destination" id="event-destination-1" type="text"
  name="event-destination" value="${place}" list="destination-list-1">
  <datalist id="destination-list-1">
    ${PLACES.map((name) => `<option value="${name}"></option>`)}
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
  if(pictures !== undefined) {
    return (`<section class="event__section  event__section--destination">
    ${description ? `<h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>` : ''}
    ${pictures.length !== 0 ? `<div class="event__photos-container">
    <div class="event__photos-tape">
    ${Object.entries(pictures).map((picture) => `<img class="event__photo" src="${picture[1].src}"
    alt="${picture[1].description}"></img>`).join('')}
    </div>
  </div>` : ''}
    </section>`);
  }
  return '';
}

function createOffersEditTemplate(offers, isAnyOffers, allOffers, type) {
  const offersByType = [];
  let count = 0;

  if (allOffers) {
    allOffers.forEach((offerType) => {
      if (offerType.type === type) {
        offersByType.push(offerType.offers);
      }
    });

    if (isAnyOffers) {
      return (`<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
      ${Object.entries(offersByType[0]).map((offer) => {
          count++;
          return (`<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${count}" data-offer-id="${offer[1].id}"
      name="event-offer-luggage" type="checkbox"  ${offers.includes(offer[1]) ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-${count}" data-offer-id="${offer[1].id}">
        <span class="event__offer-title">${offer[1].title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer[1].price}</span>
      </label>
      </div>`);
        }).join('')}
      </div>
    </section>`);
    } else {
      const uncelectedOffersId = getOffersByType(allOffers, type);
      const uncelectedOffers = getNeededOffers(allOffers, type, uncelectedOffersId);

      if (uncelectedOffersId.length !== 0) {
        return (`<section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
          ${Object.entries(uncelectedOffers).map((offer) => {
            count++;
            return (`<div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${count}" data-offer-id="${offer[1].id}"
          name="event-offer-luggage" type="checkbox">
          <label class="event__offer-label" for="event-offer-${count}" data-offer-id="${offer[1].id}">
            <span class="event__offer-title">${offer[1].title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer[1].price}</span>
          </label>
          </div>`);
          }).join('')}
          </div>
        </section>`);
      } else {
        return '';
      }
    }
  } else {
    return '';
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

function createEditFormTemplate(editFormElement, statusOfForm, allOffers, allDestination) {
  const { type, dateFrom, dateTo, basePrice, destination, offers, isAnyOffers} = editFormElement;

  const from = humanizeDueDate(dateFrom, DateFormat.DAY_AND_TIME_EVENT);
  const to = humanizeDueDate(dateTo, DateFormat.DAY_AND_TIME_EVENT);

  const currentOffers = getNeededOffers(allOffers, type, offers);
  const { description, pictures } = getCurrentDestination(allDestination, destination);
  let { name } = getCurrentDestination(allDestination, destination);

  if (basePrice === 0) {
    name = '';
  }

  const nameDestination = name;
  const descriptionDestination = description;
  const picturesDestination = pictures;

  return (`<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
    <div class="event__type-wrapper">
    ${createEventDataInPhotoTemplate(type)}
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        ${createSelectTypeEventTemplate(type)}
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
    ${createDestinationInfoTemplate(type, nameDestination)}
    </div>

    <div class="event__field-group  event__field-group--time">
    ${createTimeInEventTemplate(from, to)}
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">${statusOfForm === StatusOfForm.EDIT ? 'Delete' : 'Cancel'}</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>

    </header>
    <section class="event__details">
    ${createOffersEditTemplate(currentOffers, isAnyOffers, allOffers, type)}

    ${createDestinationDescriptionTemplate(descriptionDestination, picturesDestination)}
  </section>
  </form></li>`);
}

export default class EditFormView extends AbstractStatefulView {
  #handleFormSubmit = null;
  #handleCancelEditForm = null;
  #handleDeleteClick = null;
  #handleOutsideClick = null;

  #datePickerFrom = null;
  #datePickerTo = null;

  #statusOfForm = null;
  #offers = null;
  #destinations = null;

  constructor({
    editFormElement = BLANK_FORM,
    offers = offersFromServer,
    destinations = destinationsFromServer,
    onFormSubmit,
    onCancelEditForm,
    onDeleteClick,
    isAddOrEdit = StatusOfForm.EDIT,
    onOutsideClick
  }) {
    super();
    this._setState(EditFormView.parseListElementToState(editFormElement));

    this.#handleFormSubmit = onFormSubmit;
    this.#handleCancelEditForm = onCancelEditForm;
    this.#handleDeleteClick = onDeleteClick;
    this.#handleOutsideClick = onOutsideClick;

    this.#statusOfForm = isAddOrEdit;

    this.#offers = offers;
    this.#destinations = destinations;

    this._restoreHandlers();
  }

  get template() {
    return createEditFormTemplate(this._state, this.#statusOfForm, this.#offers, this.#destinations);
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

    if (this.element.querySelector('.event__available-offers')) {
      this.element.querySelector('.event__available-offers').addEventListener('click', this.#offersChangeToggleHandler);
    }

    if (this.#statusOfForm === StatusOfForm.ADD) {
      document.addEventListener('click', this.#outsideClickHandler);
    }

    this.#setDatePicker();
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditFormView.parseStateToListElement(this._state), this.#statusOfForm);
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
      dateFrom: userDate
    });
  };

  #timeToChangeHandler = ([userDate]) => {
    this.updateElement({
      dateTo: userDate
    });
  };

  #eventTypeToggleHandler = (evt) => {
    if (evt.target.value !== undefined) {
      const newEvent = evt.target.value;

      this._state.isAnyOffers = false;

      this._setState({
        type: newEvent
      });

      this.updateElement({
        type: newEvent
      });
    }
  };

  #inputToggleHandler = (evt) => {
    evt.preventDefault();
    this._setState({
      basePrice: Number(evt.target.value),
    });
  };

  #offersChangeToggleHandler = () => {
    const elements = this.element.querySelectorAll('.event__offer-checkbox');
    let offersById = null;
    this._state.offers = [];

    for(let i = 0; i < elements.length; i++) {
      if(elements[i].checked) {
        offersById = elements[i].dataset.offerId;
        this._state.offers.push(offersById);
        this._state.isAnyOffers = true;
      }
    }

    this._setState({
      offers: this._state.offers
    });
  };

  #destinationInputHandler = (evt) => {
    evt.preventDefault();
    this._setState({
      destination: getCurrentDestinationByName(this.#destinations, evt.target.value)?.id
    });
    if (getCurrentDestinationByName(this.#destinations, evt.target.value)?.id) {
      this.updateElement({
        destination: getCurrentDestinationByName(this.#destinations, evt.target.value)?.id
      });
    }
  };

  #outsideClickHandler = (evt) => {
    const form = document.querySelector('.event__details');
    if (!evt.target.contains(form) && !evt.target.classList.contains('event__rollup-btn')) {
      return;
    }
    this.#handleOutsideClick();
  };

  #setDatePicker() {
    this.#datePickerFrom = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        dateFormat: 'Y/m/d H:i',
        enableTime: true,
        defaultDate: this._state.dateFrom,
        maxDate: this._state.dateTo,
        // eslint-disable-next-line camelcase
        time_24hr: true,
        onChange: this.#timeFromChangeHandler
      }
    );

    this.#datePickerTo = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        dateFormat: 'Y/m/d H:i',
        enableTime: true,
        defaultDate: this._state.dateTo,
        minDate: this._state.dateFrom,
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

    delete listElement.isAnyOffers;

    return listElement;
  }
}
