import { UpdateType } from '../const.js';
import Observable from '../framework/observable.js';

export default class WaypointsModel extends Observable{
  #waypointsApiService = null;
  #waypoints = [];

  constructor({waypointsApiService}) {
    super();
    this.#waypointsApiService = waypointsApiService;
  }

  get waypoints() {
    return this.#waypoints;
  }

  async init() {
    try {
      const waypoints = await this.#waypointsApiService.waypoints;
      this.#waypoints = waypoints.map(this.#adaptToClient);
    } catch(err) {
      this.#waypoints = [];
    }

    this._notify(UpdateType.INIT);
  }

  async updateListElement(updateType, update) {
    const index = this.#waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting list element');
    }

    try {
      const response = await this.#waypointsApiService.updateWaypoint(update);
      const updatedListElement = this.#adaptToClient(response);

      this.#waypoints = [
        ...this.#waypoints.slice(0, index),
        updatedListElement,
        ...this.#waypoints.slice(index + 1)
      ];

      this._notify(updateType, update);
    } catch(err) {
      throw new Error('Can\'t update list element');
    }
  }

  async addListElement(updateType, update) {
    try {
      const response = await this.#waypointsApiService.addWaypoint(update);
      const newListElement = this.#adaptToClient(response);
      this.#waypoints = [
        newListElement,
        ...this.#waypoints
      ];
      this._notify(updateType, newListElement);
    } catch(err) {
      throw new Error('Can\'t add list element');
    }
  }

  async deleteListElement(updateType, update) {
    const index = this.#waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting list element');
    }

    try {
      await this.#waypointsApiService.deleteWaypoint(update);
      this.#waypoints = [
        ...this.#waypoints.slice(0, index),
        ...this.#waypoints.slice(index + 1)
      ];
      this._notify(updateType, update);
    } catch(err) {
      throw new Error('Can\'t delete list element');
    }
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
