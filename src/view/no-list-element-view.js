import AbstractView from '../framework/view/abstract-view.js';
import { FilterType } from '../const.js';

const NoListElementTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no event in the future',
  [FilterType.PRESENT]: 'There are no event in the present',
  [FilterType.PAST]: 'There are no event in the past',
};

function createNoListElementTemplate(filterType) {
  const noListElementTextValue = NoListElementTextType[filterType];
  return (`
  <p class="trip-events__msg">${noListElementTextValue}</p>`);
}

export default class NoListElementView extends AbstractView {
  #filterType = null;

  constructor ({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoListElementTemplate(this.#filterType);
  }
}
