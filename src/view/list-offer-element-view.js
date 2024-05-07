import AbstractView from '../framework/view/abstract-view.js';

function createOfferTemplate(offerElement) {
  const {name, price} = offerElement;

  return (
    `<li class="event__offer">
    <span class="event__offer-title">${name}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>`
  );
}

export default class ListOfferElementView extends AbstractView {
  #offerElement = null;

  constructor({offerElement}) {
    super();
    this.#offerElement = offerElement;
  }

  get template() {
    return createOfferTemplate(this.#offerElement);
  }
}
