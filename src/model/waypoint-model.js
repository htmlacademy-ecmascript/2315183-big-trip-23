import Observable from '../framework/observable.js';
import { getRandomWaypoint } from '../mock/waypoint-mock.js';
import { getRandomNumber } from '../view/utils/common.js';

const WaypointCount = {
  MIN: 0,
  MAX: 10
};

const WAYPOINT_COUNT = getRandomNumber(WaypointCount.MIN, WaypointCount.MAX);

export default class WaypoinstModel extends Observable{
  #waypoints = Array.from({length: WAYPOINT_COUNT}, getRandomWaypoint);

  get waypoints() {
    return this.#waypoints;
  }
}
