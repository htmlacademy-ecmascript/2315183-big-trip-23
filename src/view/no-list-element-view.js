import AbstractView from '../framework/view/abstract-view.js';

function createNoListElementTemplate() {
  return (`
  <p class="trip-events__msg">Click New Event to create your first point</p>`);
}

export default class NoListElementView extends AbstractView {
  get template() {
    return createNoListElementTemplate();
  }
}
