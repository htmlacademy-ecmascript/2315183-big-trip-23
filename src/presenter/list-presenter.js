import ListView from '../view/list-view.js';
import ListElementView from '../view/list-element-view.js';
import EditFormView from '../view/edit-form-view.js';
import ListOfferElementView from '../view/list-offer-element-view.js';
import { render, replace } from '../framework/render.js';
import NoListElementView from '../view/no-list-element-view.js';

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

    this.#renderList();

  }

  #renderList() {
    render(this.#listComponent, this.#listContainer);

    if (this.#listWaypoints.every((task) => task.isArchive)) {
      render(new NoListElementView(), this.#listComponent.element);
      return;
    }

    for (let i = 0; i < this.#listWaypoints.length; i++) {
      const listElementComponent = new ListElementView({listElement: this.#listWaypoints[i]});

      this.#renderListElement(this.#listWaypoints[i]);

      for (let j = 0; j < this.#listWaypoints[i].offers.length; j++) {
        this.#renderOffersListElement(this.#listWaypoints[i].offers, listElementComponent);
      }

    }
  }

  #renderListElement(listElement) {

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditFormToListElement();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const listComponent = new ListElementView({
      listElement,
      onEditClick: () => {
        replaceListElementToEditForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const listElementEditComponent = new EditFormView({
      editFormElement: listElement,
      onFormSubmit: () => {
        replaceEditFormToListElement();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceListElementToEditForm() {
      replace(listElementEditComponent, listComponent);
    }

    function replaceEditFormToListElement() {
      replace(listComponent, listElementEditComponent);
    }

    render(listComponent, this.#listComponent.element);
  }

  #renderOffersListElement(offerElement, listElementComponent) {
    const offerComponent = new ListOfferElementView({offerElement});

    render(offerComponent, listElementComponent.element.querySelector('.event__selected-offers'));
  }
}
