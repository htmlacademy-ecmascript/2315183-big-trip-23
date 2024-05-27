import { UserAction, UpdateType } from '../const.js';
import { remove, render, replace } from '../framework/render.js';
import EditFormView from '../view/edit-form-view.js';
import ListElementView from '../view/list-element-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export default class ListElementPresenter {
  #listContainer = null;

  #listElementComponent = null;
  #listELementEditComponent = null;

  #listElement = null;

  #handleDataChange = null;
  #handleModeChange = null;

  #mode = Mode.DEFAULT;

  constructor({listContainer, onDataChange, onModeChange}) {
    this.#listContainer = listContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(listElement) {
    const prevListElementComponent = this.#listElementComponent;
    const prevListElementEditComponent = this.#listELementEditComponent;

    this.#listElement = listElement;

    this.#listElementComponent = new ListElementView({
      listElement: this.#listElement,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#listELementEditComponent = new EditFormView({
      editFormElement: this.#listElement,
      onFormSubmit: this.#handleFormSubmit,
      onCancelEditForm: this.#handleCancelEditForm
    });

    if (prevListElementComponent === null || prevListElementEditComponent === null) {
      render(this.#listElementComponent, this.#listContainer);
      return;
    }

    if(this.#mode === Mode.DEFAULT) {
      replace(this.#listElementComponent, prevListElementComponent);
    }

    if(this.#mode === Mode.EDITING) {
      replace(this.#listELementEditComponent, prevListElementEditComponent);
    }

    remove(prevListElementComponent);
    remove(prevListElementEditComponent);

  }

  destroy() {
    remove(this.#listElementComponent);
    remove(this.#listELementEditComponent);
  }

  resetView() {
    if(this.#mode !== Mode.DEFAULT) {
      this.#listELementEditComponent.reset(this.#listElement);
      this.#replaceEditFormToListElement();
    }
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#listELementEditComponent.reset(this.#listElement);
      this.#replaceEditFormToListElement();
    }
  };

  #replaceListElementToEditForm() {
    replace(this.#listELementEditComponent, this.#listElementComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);

    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceEditFormToListElement() {
    replace(this.#listElementComponent, this.#listELementEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);

    this.#mode = Mode.DEFAULT;
  }

  #handleEditClick = () => {
    this.#replaceListElementToEditForm();
  };

  #handleFormSubmit = (listElement) => {
    this.#handleDataChange(
      UserAction.UPDATE_LIST_ELEMENT,
      UpdateType.MINOR,
      listElement
    );
    this.#replaceEditFormToListElement();
  };

  #handleCancelEditForm = () => {
    this.#listELementEditComponent.reset(this.#listElement);
    this.#replaceEditFormToListElement();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_LIST_ELEMENT,
      UpdateType.MINOR,
      {...this.#listElement, isFavorite: !this.#listElement.isFavorite}
    );
  };

}
