import { RenderPosition, remove, render, replace } from '../framework/render.js';
import { sortListByDate } from '../utils/list.js';
import TripInfoView from '../view/trip-info-view.js';

export default class HeaderPresenter {
  #tripInfoContainer = null;
  #waypointsModel = null;
  #tripInfoComponent = null;

  constructor({waypointsModel, siteTripInfoElement}) {
    this.#waypointsModel = waypointsModel;
    this.#tripInfoContainer = siteTripInfoElement;

    this.#waypointsModel.addObserver(this.#handleModelEvent);
  }

  get waypoints() {
    const waypoints = this.#waypointsModel.waypoints.sort(sortListByDate);
    return waypoints;
  }

  init() {
    const waypoints = this.waypoints;
    const prevTripInfoComponent = this.#tripInfoComponent;

    this.#tripInfoComponent = new TripInfoView({
      waypoints: waypoints
    });

    if (prevTripInfoComponent === null) {
      render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };
}
