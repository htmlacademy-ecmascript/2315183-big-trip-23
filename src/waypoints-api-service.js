import ApiService from './framework/api-service.js';

const Method = {
  GET: 'GET',
  PUT: 'PUT'
};

export default class WaypointsApiService extends ApiService {
  get waypoints() {
    return this._load({url: 'points'})
      .then(ApiService.parseResponse);
  }

  async updateWaypoint(waypoint) {
    const response = await this._load({
      url: `points/${waypoint.id}`,
      method: Method.PUT,
      body: JSON.stringify(this.#adaptToServer(waypoint)),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  #adaptToServer(waypoint) {
    const adaptedWaypoint = {
      ...waypoint,
      'base_price': waypoint.basePrice,
      'date_from': waypoint.dateFrom,
      'date_to': waypoint.dateTo,
      'is_favorite': waypoint.isFavorite
    };

    delete waypoint.basePrice;
    delete waypoint.dateFrom;
    delete waypoint.dateTo;
    delete waypoint.isFavorite;

    return adaptedWaypoint;
  }
}
