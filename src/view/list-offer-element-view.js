import { createElement } from '../render.js';

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

export default class ListOfferElementView {
  constructor({offerElement}) {
    this.offerElement = offerElement;
  }

  getTemplate() {
    return createOfferTemplate(this.offerElement);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
