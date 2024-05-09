import { render, replace } from '../framework/render.js';
import EditFormView from '../view/edit-form-view.js';
import ListElementView from '../view/list-element-view.js';


export default class ListElementPresenter {
  #listContainer = null;

  #listElementComponent = null;
  #listELementEditComponent = null;

  #listElement = null;

  constructor({listContainer}) {
    this.#listContainer = listContainer;
  }

  init(listElement) {
    this.#listElement = listElement;

    this.#listElementComponent = new ListElementView({
      listElement: this.#listElement,
      onEditClick: this.#handleEditClick,
    });

    this.#listELementEditComponent = new EditFormView({
      editFormElement: this.#listElement,
      onFormSubmit: this.#handleFormSubmit,
    });

    render(this.#listElementComponent, this.#listContainer);
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

  #handleFormSubmit = () => {
    this.#replaceEditFormToListElement();
  };

}
