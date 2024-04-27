import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import SortView from './view/sort-view.js';
import { render } from './render.js';


const siteMainElement = document.querySelector('main');
const siteHeaderElement = document.querySelector('.page-header');

const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');
const siteSortElement = siteMainElement.querySelector('.trip-events');

render(new TripInfoView(), siteTripInfoElement, 'afterbegin');
render(new FilterView(), siteFilterElement);
render(new SortView(), siteSortElement);
