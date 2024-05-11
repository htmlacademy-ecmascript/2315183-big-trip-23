import { remove, render, replace } from '../framework/render.js';
import EditFormView from '../view/edit-form-view.js';
import ListElementView from '../view/list-element-view.js';


export default class ListElementPresenter {
  #listContainer = null;

  #listElementComponent = null;
  #listELementEditComponent = null;

  #listElement = null;

  #handleDataChange = null;

  constructor({listContainer, onDataChange}) {
    this.#listContainer = listContainer;
    this.#handleDataChange = onDataChange;
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
    });

    if (prevListElementComponent === null || prevListElementEditComponent === null) {
      render(this.#listElementComponent, this.#listContainer);
      return;
    }

    if (this.#listContainer.contains(prevListElementComponent.element)) {
      replace(this.#listElementComponent, prevListElementComponent);
    }

    if (this.#listContainer.contains(prevListElementEditComponent.element)) {
      replace(this.#listELementEditComponent, prevListElementEditComponent);
    }

    remove(prevListElementComponent);
    remove(prevListElementEditComponent);

  }

  destroy() {
    remove(this.#listElementComponent);
    remove(this.#listELementEditComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditFormToListElement();
    }
  };

  #replaceListElementToEditForm() {
    replace(this.#listELementEditComponent, this.#listElementComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceEditFormToListElement() {
    replace(this.#listElementComponent, this.#listELementEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleEditClick = () => {
    this.#replaceListElementToEditForm();
  };

  #handleFormSubmit = (listElement) => {
    this.#handleDataChange(listElement);
    this.#replaceEditFormToListElement();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#listElement, isFavorite: !this.#listElement.isFavorite});
  };

}
