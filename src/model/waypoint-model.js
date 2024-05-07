import { getRandomWaypoint } from '../mock/waypoint-mock.js';
import { getRandomNumber } from '../view/utils/common.js';

const WaypointCount = {
  MIN: 0,
  MAX: 6
};

const WAYPOINT_COUNT = getRandomNumber(WaypointCount.MIN, WaypointCount.MAX);

export default class WaypoinstModel {
  #waypoints = Array.from({length: WAYPOINT_COUNT}, getRandomWaypoint);

  get waypoint() {
    return this.#waypoints;
  }
}
