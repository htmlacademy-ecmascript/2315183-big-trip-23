import { UpdateType } from '../const.js';
import Observable from '../framework/observable.js';

export default class WaypointsModel extends Observable{
  #waypointsApiService = null;
  #waypoints = [];
  #offers = [];
  #destinations = [];

  constructor({waypointsApiService}) {
    super();
    this.#waypointsApiService = waypointsApiService;
  }

  get waypoints() {
    return this.#waypoints;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      const waypoints = await this.#waypointsApiService.waypoints;
      const offers = await this.#waypointsApiService.offers;
      const destinations = await this.#waypointsApiService.destinations;

      this.#offers = offers;
      this.#destinations = destinations;
      this.#waypoints = waypoints.map(this.#adaptToClient);
    } catch(err) {
      this.#waypoints = [];
      this.#offers = [];
      this.#destinations = [];
    }

    this._notify(UpdateType.INIT);
  }

  async updateListElement(updateType, update) {
    const index = this.#waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting waypoint');
    }

    const response = await this.#waypointsApiService.updateWaypoint(update);
    const updatedListElement = this.#adaptToClient(response);

    this.#waypoints = [
      ...this.#waypoints.slice(0, index),
      updatedListElement,
      ...this.#waypoints.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addListElement(updateType, update) {
    this.#waypoints = [
      update,
      ...this.#waypoints
    ];

    this._notify(updateType, update);
  }

  deleteListElement(updateType, update) {
    const index = this.#waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting waypoint');
    }

    this.#waypoints = [
      ...this.#waypoints.slice(0, index),
      ...this.#waypoints.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  #adaptToClient(waypoint) {
    const adaptedWaypoint = {
      ...waypoint,
      basePrice: waypoint['base_price'],
      dateFrom: new Date(waypoint['date_from']),
      dateTo: new Date(waypoint['date_to']),
      isFavorite: waypoint['is_favorite']
    };


    delete adaptedWaypoint['base_price'];
    delete adaptedWaypoint['date_from'];
    delete adaptedWaypoint['date_to'];
    delete adaptedWaypoint['is_favorite'];

    return adaptedWaypoint;
  }
}
