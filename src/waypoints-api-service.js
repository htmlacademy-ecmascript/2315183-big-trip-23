import ApiService from './framework/api-service.js';

const Method = {
  GET: 'GET',
  PUT: 'PUT'
};

export default class WaypointsApiService extends ApiService {
  get waypoints() {
    return this._load({url: 'big-trip/points'})
      .then(ApiService.parseResponse);
  }

  async updateWaypoint(waypoint) {
    const response = await this._load({
      url: `big-trip/points/${waypoint.id}`,
      method: Method.PUT,
      body: JSON.stringify(waypoint),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }
}
