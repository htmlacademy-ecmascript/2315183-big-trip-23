import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import SortView from './view/sort-view.js';
import ListPresenter from './presenter/list-presenter.js';
import { render } from './render.js';


const siteMainElement = document.querySelector('main');
const siteHeaderElement = document.querySelector('.page-header');
const siteListElement = siteMainElement.querySelector('.trip-events');
const listPresenter = new ListPresenter({listContainer: siteListElement});

const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');

render(new TripInfoView(), siteTripInfoElement, 'afterbegin');
render(new FilterView(), siteFilterElement);


listPresenter.init();
render(new SortView(), siteListElement, 'afterbegin');
