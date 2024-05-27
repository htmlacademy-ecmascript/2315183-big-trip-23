import TripInfoView from './view/trip-info-view.js';
import ListPresenter from './presenter/list-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import WaypointsModel from './model/waypoint-model.js';
import FilterModel from './model/filter-model.js';
import { RenderPosition, render } from './framework/render.js';
import NewEventButtonView from './view/new-event-button-view.js';

const siteMainElement = document.querySelector('main');
const siteHeaderElement = document.querySelector('.page-header');
const siteListElement = siteMainElement.querySelector('.trip-events');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteEventButtonElement = siteHeaderElement.querySelector('.trip-main');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');

const waypointsModel = new WaypointsModel();
const filterModel = new FilterModel();
const listPresenter = new ListPresenter({
  listContainer: siteListElement,
  waypointsModel,
  filterModel,
  onNewTaskDestroy: handleNewListElementFormClose
});
const filterPresenter = new FilterPresenter({
  filterContainer: siteFilterElement,
  filterModel,
  waypointsModel
});
const newEventButtonComponent = new NewEventButtonView({
  onClick: handleNewEventButtonClick
});

function handleNewListElementFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick() {
  listPresenter.createListElement();
  newEventButtonComponent.element.disabled = true;
}

render(new TripInfoView(), siteTripInfoElement, RenderPosition.AFTERBEGIN);
render(newEventButtonComponent, siteEventButtonElement);

filterPresenter.init();
listPresenter.init();
