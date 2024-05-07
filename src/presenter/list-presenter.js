import ListView from '../view/list-view.js';
import ListElementView from '../view/list-element-view.js';
import AddFormView from '../view/add-form-view.js';
import ListOfferElementView from '../view/list-offer-element-view.js';
import { render } from '../framework/render.js';

export default class ListPresenter {
  #listContainer = null;
  #waypointsModel = null;

  #listComponent = new ListView();

  #listWaypoints = [];

  constructor({listContainer, waypointsModel}) {
    this.#listContainer = listContainer;
    this.#waypointsModel = waypointsModel;
  }

  init() {
    this.#listWaypoints = [...this.#waypointsModel.waypoint];

    render(this.#listComponent, this.#listContainer);

    for (let i = 0; i < this.#listWaypoints.length; i++) {
      const listElementComponent = new ListElementView({listElement: this.#listWaypoints[i]});

      render(listElementComponent, this.#listComponent.element);

      if(i === 0) {
        render(new AddFormView({addFormElement: this.#listWaypoints[0]}), this.#listComponent.element);
      }

      // Может ещё понадобится
      for (let j = 0; j < this.#listWaypoints[i].offers.length; j++) {
        render(new ListOfferElementView({offerElement: this.#listWaypoints[i].offers[j]}), listElementComponent.element.querySelector('.event__selected-offers'));
      }
    }

  }
}
