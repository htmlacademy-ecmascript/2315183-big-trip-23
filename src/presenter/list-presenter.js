import ListView from '../view/list-view.js';
import { render } from '../framework/render.js';
import NoListElementView from '../view/no-list-element-view.js';
import SortView from '../view/sort-view.js';
import ListElementPresenter from './list-element-presenter.js';
import { updateItem } from '../view/utils/common.js';
import { SortType } from '../const.js';
import { sortListByDate, sortListByPrice, sortListByTime } from '../view/utils/list.js';

export default class ListPresenter {
  #listContainer = null;
  #waypointsModel = null;

  #listComponent = new ListView();
  #noListElementsComponent = new NoListElementView();
  #sortComponent = null;

  #listWaypoints = [];
  #sourcedListWaypoints = [];
  #listElementPresenters = new Map();

  #currentSortType = SortType.DAY;

  constructor({listContainer, waypointsModel}) {
    this.#listContainer = listContainer;
    this.#waypointsModel = waypointsModel;
  }

  get waypoints() {
    return this.#waypointsModel.waypoints;
  }

  init() {
    this.#listWaypoints = [...this.#waypointsModel.waypoints];
    this.#listWaypoints.sort(sortListByDate);
    this.#sourcedListWaypoints = [...this.#waypointsModel.waypoints];
    this.#sourcedListWaypoints.sort(sortListByDate);

    this.#renderList();
    this.#renderSort(this.#listContainer);
  }

  #handleListElementChange = (updatedListElement) => {
    this.#listWaypoints = updateItem(this.#listWaypoints, updatedListElement);
    this.#sourcedListWaypoints = updateItem(this.#sourcedListWaypoints, updatedListElement);

    this.#listElementPresenters.get(updatedListElement.id).init(updatedListElement);
  };

  #handleModeChange = () => {
    this.#listElementPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if(this.#currentSortType === sortType) {
      return;
    }

    this.#sortListElements(sortType);

    this.#clearList();
    this.#renderList();
  };

  #renderList() {
    render(this.#listComponent, this.#listContainer);

    if (this.#listWaypoints.every((listElement) => listElement.isArchive)) {
      this.#renderNoListElements(this.#noListElementsComponent, this.#listComponent);
      return;
    }

    for (let i = 0; i < this.#listWaypoints.length; i++) {
      this.#renderListElement(this.#listWaypoints[i]);
    }
  }

  #renderListElement(listElement) {
    const listElementPresenter = new ListElementPresenter({
      listContainer: this.#listComponent.element,
      onDataChange: this.#handleListElementChange,
      onModeChange: this.#handleModeChange
    });

    listElementPresenter.init(listElement);
    this.#listElementPresenters.set(listElement.id, listElementPresenter);
  }

  #renderSort(listContainer) {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, listContainer, 'afterbegin');
  }

  #renderNoListElements(noListElementsComponent, listComponent) {
    render(noListElementsComponent, listComponent.element);
  }

  #clearList() {
    this.#listElementPresenters.forEach((presenter) => presenter.destroy());
    this.#listElementPresenters.clear();
  }

  #sortListElements(sortType) {
    switch (sortType) {
      case SortType.PRICE:
        this.#listWaypoints.sort(sortListByPrice);
        break;
      case SortType.TIME:
        this.#listWaypoints.sort(sortListByTime);
        break;
      default:
        this.#listWaypoints = [...this.#sourcedListWaypoints];
    }

    this.#currentSortType = sortType;
  }
}
