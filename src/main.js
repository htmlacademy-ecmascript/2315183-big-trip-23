import TripInfoView from './view/trip-info-view.js';
import ListPresenter from './presenter/list-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import WaypointsModel from './model/waypoint-model.js';
import FilterModel from './model/filter-model.js';
import { render } from './framework/render.js';

const siteMainElement = document.querySelector('main');
const siteHeaderElement = document.querySelector('.page-header');
const siteListElement = siteMainElement.querySelector('.trip-events');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');

const waypointsModel = new WaypointsModel();
const filterModel = new FilterModel();
const listPresenter = new ListPresenter({listContainer: siteListElement, waypointsModel, filterModel});
const filterPresenter = new FilterPresenter({filterContainer: siteFilterElement, filterModel, waypointsModel});


render(new TripInfoView(), siteTripInfoElement, 'afterbegin');

filterPresenter.init();
listPresenter.init();
