import ListView from '../view/list-view.js';
import ListElementView from '../view/list-element-view.js';
import ListOfferElementView from '../view/list-offer-element-view.js';
import { render } from '../framework/render.js';
import NoListElementView from '../view/no-list-element-view.js';
import SortView from '../view/sort-view.js';
import ListElementPresenter from './list-element-presenter.js';

export default class ListPresenter {
  #listContainer = null;
  #waypointsModel = null;

  #listComponent = new ListView();
  #sortComponent = new SortView();
  #noListElementsComponent = new NoListElementView();

  #listWaypoints = [];

  constructor({listContainer, waypointsModel}) {
    this.#listContainer = listContainer;
    this.#waypointsModel = waypointsModel;
  }

  init() {
    this.#listWaypoints = [...this.#waypointsModel.waypoint];

    this.#renderList();

  }

  #renderList() {
    render(this.#listComponent, this.#listContainer);

    if (this.#listWaypoints.every((listElement) => listElement.isArchive)) {
      this.#renderNoListElements(this.#noListElementsComponent, this.#listComponent);
      return;
    }

    this.#renderSort(this.#sortComponent, this.#listContainer);

    for (let i = 0; i < this.#listWaypoints.length; i++) {
      const listElementComponent = new ListElementView({listElement: this.#listWaypoints[i]});

      this.#renderListElement(this.#listWaypoints[i]);

      for (let j = 0; j < this.#listWaypoints[i].offers.length; j++) {
        this.#renderOffersListElement(this.#listWaypoints[i].offers, listElementComponent);
      }

    }
  }

  #renderListElement(listElement) {

    const listElementPresenter = new ListElementPresenter({
      listContainer: this.#listComponent.element,
    });

    listElementPresenter.init(listElement);
  }

  #renderOffersListElement(offerElement, listElementComponent) {
    const offerComponent = new ListOfferElementView({offerElement});

    render(offerComponent, listElementComponent.element.querySelector('.event__selected-offers'));
  }

  #renderSort(sortComponent, listContainer) {
    render(sortComponent, listContainer, 'afterbegin');
  }

  #renderNoListElements(noListElementsComponent, listComponent) {
    render(noListElementsComponent, listComponent.element);
  }
}
