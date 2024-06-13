import { UserAction, UpdateType, StatusOfForm, Mode } from '../const.js';
import { remove, render, replace } from '../framework/render.js';
import EditFormView from '../view/edit-form-view.js';
import ListElementView from '../view/list-element-view.js';
import { isDatesEqual, isListElementHaveOffers } from '../utils/list.js';

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
      formData: this.#listElement,
      onFormSubmit: this.#handleFormSubmit,
      onCancelEditForm: this.#handleCancelEditForm,
      onDeleteClick: this.#handleDeleteClick,
      isAddOrEdit: StatusOfForm.EDIT
    });

    if (prevListElementComponent === null || prevListElementEditComponent === null) {
      render(this.#listElementComponent, this.#listContainer);
      return;
    }

    if(this.#mode === Mode.DEFAULT) {
      replace(this.#listElementComponent, prevListElementComponent);
    }

    if(this.#mode === Mode.EDITING) {
      replace(this.#listElementComponent, prevListElementEditComponent);
      this.#mode = Mode.DEFAULT;
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

  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#listELementEditComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#listELementEditComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === Mode.DEFAULT) {
      this.#listElementComponent.shake();
      return;
    }

    const resetFormState = () => {
      this.#listELementEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#listELementEditComponent.shake(resetFormState);
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

  #handleFormSubmit = (update) => {
    const isMinorUpdate =
    !isDatesEqual(this.#listElement.dateFrom, update.dateFrom) ||
    isListElementHaveOffers(this.#listElement.offers) !== isListElementHaveOffers(update.offers);

    this.#handleDataChange(
      UserAction.UPDATE_LIST_ELEMENT,
      isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
      update
    );
  };

  #handleCancelEditForm = () => {
    this.#listELementEditComponent.reset(this.#listElement);
    this.#replaceEditFormToListElement();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_LIST_ELEMENT,
      UpdateType.PATCH,
      {...this.#listElement, isFavorite: !this.#listElement.isFavorite}
    );
  };

  #handleDeleteClick = (listElement) => {
    this.#handleDataChange(
      UserAction.DELETE_LIST_ELEMENT,
      UpdateType.MINOR,
      listElement,
    );
  };

}
