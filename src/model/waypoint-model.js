import { getRandomWaypoint } from '../mock/waypoint-mock.js';

const WAYPOINT_COUNT = 5;

export default class WaypointModel {
  waypoints = Array.from({length: WAYPOINT_COUNT}, getRandomWaypoint);

  getWaypoint() {
    return this.waypoints;
  }
}
