import AbstractView from '../framework/view/abstract-view.js';

function createContainerListTemplate() {
  return (
    `<section class="trip-events">
    </section>`
  );
}

export default class ContainerListView extends AbstractView {
  get template() {
    return createContainerListTemplate();
  }
}
