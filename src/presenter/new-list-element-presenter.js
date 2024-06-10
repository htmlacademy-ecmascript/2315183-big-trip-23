import { nanoid } from 'nanoid';
import { RenderPosition, remove, render } from '../framework/render.js';
import EditFormView from '../view/edit-form-view.js';
import { StatusOfForm, UpdateType, UserAction } from '../const.js';

export default class NewListElementPresenter {
  #listContainer = null;
  #waypointsModel = null;
  #handleDataChange = null;
  #handleDestroy = null;

  #listElementEditComponent = null;

  constructor ({listContainer, waypointsModel, onDataChange, onDestroy}) {
    this.#listContainer = listContainer;
    this.#waypointsModel = waypointsModel;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  get offers() {
    return this.#waypointsModel.offers;
  }

  get destinations() {
    return this.#waypointsModel.destinations;
  }

  init() {
    if (this.#listElementEditComponent !== null) {
      return;
    }

    const offers = this.offers;
    const destinations = this.destinations;

    this.#listElementEditComponent = new EditFormView({
      onFormSubmit: this.#handleFormSubmit,
      offers: offers,
      destinations: destinations,
      onCancelEditForm: this.#handleCancelEditForm,
      onDeleteClick: this.#handleCancelEditForm,
      onOutsideClick: this.#handleCancelEditForm,
      isAddOrEdit: StatusOfForm.ADD
    });

    render(this.#listElementEditComponent, this.#listContainer, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#listElementEditComponent === null) {
      return;
    }

    this.#handleDestroy();
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      remove(this.#listElementEditComponent);
      this.destroy();
    }
  };

  #handleFormSubmit = (listElement) => {
    this.#handleDataChange(
      UserAction.ADD_LIST_ELEMENT,
      UpdateType.MINOR,
      {id: nanoid(), ...listElement},
    );
    remove(this.#listElementEditComponent);
    this.destroy();

    this.#listElementEditComponent = null;
  };

  #handleCancelEditForm = () => {
    remove(this.#listElementEditComponent);
    this.destroy();

    this.#listElementEditComponent = null;
  };
}
