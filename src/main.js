import ListPresenter from './presenter/list-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import WaypointsModel from './model/waypoints-model.js';
import FilterModel from './model/filter-model.js';
import NewEventButtonView from './view/new-event-button-view.js';
import { waypointsApiService } from './const.js';
import HeaderPresenter from './presenter/header-presenter.js';
import { render } from './framework/render.js';

const siteMainElement = document.querySelector('main');
const siteHeaderElement = document.querySelector('.page-header');
const siteListElement = siteMainElement.querySelector('.trip-events__list');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteEventButtonElement = siteHeaderElement.querySelector('.trip-main');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');

const waypointsModel = new WaypointsModel({
  waypointsApiService: waypointsApiService
});
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
const headerPresenter = new HeaderPresenter({
  waypointsModel: waypointsModel,
  siteTripInfoElement: siteTripInfoElement
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

headerPresenter.init();
filterPresenter.init();
listPresenter.init();
waypointsModel.init()
  .finally(() => {
    render(newEventButtonComponent, siteEventButtonElement);
  });
