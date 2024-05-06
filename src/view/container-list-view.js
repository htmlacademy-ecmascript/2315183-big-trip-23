import { createElement } from '../render.js';

function createContainerListTemplate() {
  return (
    `<section class="trip-events">
    </section>`
  );
}

export default class ContainerListView {
  getTemplate() {
    return createContainerListTemplate();
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
