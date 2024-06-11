import { RenderPosition, render } from '../framework/render.js';
import TripInfoView from '../view/trip-info-view.js';

export default class HeaderPresenter {
  #siteTripInfoElement = null;
  #waypointsModel = null;

  constructor({waypointsModel, siteTripInfoElement}) {
    this.#waypointsModel = waypointsModel;
    this.#siteTripInfoElement = siteTripInfoElement;
  }

  init() {
    render(new TripInfoView(), this.#siteTripInfoElement, RenderPosition.AFTERBEGIN);
  }
}
