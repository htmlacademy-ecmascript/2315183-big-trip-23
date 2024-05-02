import { createElement } from '../render.js';

function createListTemplate() {
  return '<ul class="event__selected-offers"></ul>';
}

export default class ListOfferView {
  getTemplate() {
    return createListTemplate();
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
