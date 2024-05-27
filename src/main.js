import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import ListPresenter from './presenter/list-presenter.js';
import WaypointsModel from './model/waypoint-model.js';
import FilterModel from './model/filter-model.js';
import { render } from './framework/render.js';

const filters = [
  {
    type: 'everything',
    count: 0
  }
];

const siteMainElement = document.querySelector('main');
const siteHeaderElement = document.querySelector('.page-header');
const siteListElement = siteMainElement.querySelector('.trip-events');

const waypointsModel = new WaypointsModel();
const filterModel = new FilterModel();
const listPresenter = new ListPresenter({listContainer: siteListElement, waypointsModel});

const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');

render(new TripInfoView(), siteTripInfoElement, 'afterbegin');
render(new FilterView({
  filters,
  currentFilterType: 'everything',
  onFilterTypeChange: () => {}
}), siteFilterElement);

listPresenter.init();

