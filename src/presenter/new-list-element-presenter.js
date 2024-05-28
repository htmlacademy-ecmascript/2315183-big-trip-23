import { nanoid } from 'nanoid';
import { RenderPosition, render } from '../framework/render.js';
import EditFormView from '../view/edit-form-view.js';
import { UpdateType, UserAction } from '../const.js';

export default class NewListElementPresenter {
  #listContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;

  #listElementAddComponent = null;

  constructor ({listContainer, onDataChange, onDestroy}) {
    this.#listContainer = listContainer;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init() {
    if (this.#listElementAddComponent !== null) {
      return;
    }

    this.#listElementAddComponent = new EditFormView({
      onFormSubmit: this.#handleFormSubmit,
      onCancelEditForm: this.#handleCancelEditForm,
      onDeleteClick: this.#handleDeleteClick
    });

    render(this.#listElementAddComponent, this.#listContainer, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#listElementAddComponent === null) {
      return;
    }

    this.#handleDestroy();
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };

  #handleFormSubmit = (listElement) => {
    this.#handleDataChange(
      UserAction.ADD_TASK,
      UpdateType.MINOR,
      {id: nanoid(), ...listElement},
    );
    this.destroy();
  };

  #handleCancelEditForm = () => {
    this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };
}
