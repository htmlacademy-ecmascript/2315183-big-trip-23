import { getRandomWaypoint } from '../mock/waypoint-mock.js';

const WAYPOINT_COUNT = 5;

export default class WaypoinstModel {
  #waypoints = Array.from({length: WAYPOINT_COUNT}, getRandomWaypoint);

  get waypoint() {
    return this.#waypoints;
  }
}
