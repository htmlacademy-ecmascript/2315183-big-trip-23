import Observable from '../framework/observable.js';
import { getRandomWaypoint } from '../mock/waypoint-mock.js';
import { getRandomNumber } from '../utils/common.js';

const WaypointCount = {
  MIN: 0,
  MAX: 10
};

const WAYPOINT_COUNT = getRandomNumber(WaypointCount.MIN, WaypointCount.MAX);

export default class WaypoinstModel extends Observable{
  #waypointsApiService = null;
  #waypoints = Array.from({length: WAYPOINT_COUNT}, getRandomWaypoint);

  constructor({waypointsApiService}) {
    super();
    this.#waypointsApiService = waypointsApiService;

    this.#waypointsApiService.waypoints.then((waypoint) => {
      console.log(waypoint.map(this.#adaptToClient));
    });
  }

  get waypoints() {
    return this.#waypoints;
  }

  updateListElement(updateType, update) {
    const index = this.#waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    this.#waypoints = [
      ...this.#waypoints.slice(0, index),
      update,
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
      throw new Error('Can\'t update unexisting task');
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
      isFavorite: waypoint['is_favorite'],
    };

    delete adaptedWaypoint['base_price'];
    delete adaptedWaypoint['date_from'];
    delete adaptedWaypoint['date_to'];
    delete adaptedWaypoint['is_favorite'];

    return adaptedWaypoint;
  }
}
