import ListView from '../view/list-view.js';
import { render } from '../framework/render.js';
import NoListElementView from '../view/no-list-element-view.js';
import SortView from '../view/sort-view.js';
import ListElementPresenter from './list-element-presenter.js';
import { SortType, UserAction, UpdateType } from '../const.js';
import { sortListByDate, sortListByPrice, sortListByTime } from '../view/utils/list.js';

export default class ListPresenter {
  #listContainer = null;
  #waypointsModel = null;

  #listComponent = new ListView();
  #noListElementsComponent = new NoListElementView();
  #sortComponent = null;

  #listElementPresenters = new Map();

  #currentSortType = SortType.DAY;

  constructor({listContainer, waypointsModel}) {
    this.#listContainer = listContainer;
    this.#waypointsModel = waypointsModel;

    this.#waypointsModel.addObserver(this.#handleModelEvent);
  }

  get waypoints() {
    switch (this.#currentSortType) {
      case SortType.PRICE:
        return [...this.#waypointsModel.waypoints].sort(sortListByPrice);
      case SortType.TIME:
        return [...this.#waypointsModel.waypoints].sort(sortListByTime);
    }

    return this.#waypointsModel.waypoints;
  }

  init() {
    this.waypoints.sort(sortListByDate);

    this.#renderList();
    this.#renderSort(this.#listContainer);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_LIST_ELEMENT:
        this.#waypointsModel.updateListElement(updateType, update);
        break;
      case UserAction.ADD_LIST_ELEMENT:
        this.#waypointsModel.addListElement(updateType, update);
        break;
      case UserAction.DELETE_LIST_ELEMENT:
        this.#waypointsModel.deleteListElement(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#listElementPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        break;
      case UpdateType.MAJOR:
        break;
    }
  };

  #handleModelChange = () => {
    this.#listElementPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if(this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;

    this.#clearList();
    this.#renderList();
  };

  #renderList() {
    render(this.#listComponent, this.#listContainer);

    if (this.waypoints.every((listElement) => listElement.isArchive)) {
      this.#renderNoListElements(this.#noListElementsComponent, this.#listComponent);
      return;
    }

    for (let i = 0; i < this.waypoints.length; i++) {
      this.#renderListElement(this.waypoints[i]);
    }
  }

  #renderListElement(listElement) {
    const listElementPresenter = new ListElementPresenter({
      listContainer: this.#listComponent.element,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModelChange
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
}
