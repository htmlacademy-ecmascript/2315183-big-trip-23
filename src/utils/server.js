import { render } from '../framework/render.js';
import FailedLoadDataView from '../view/failed-load-data-view.js';
import WaypointsApiService from '../waypoints-api-service.js';

const AUTHORIZATION = 'Basic k8v5s7m2h9z';
const END_POINT = 'https://23.objects.htmlacademy.pro/big-trip';

const siteTripInfoElement = document.querySelector('.trip-events');

async function getDataFromServer() {
  try {
    const waypointsApiService = new WaypointsApiService(END_POINT, AUTHORIZATION);

    const offersFromServer = await waypointsApiService.offers;
    const destinationsFromServer = await waypointsApiService.destinations;

    const dateTo = new Date();

    destinationsFromServer.push({
      id: '1',
      description: '',
      name: '',
      pictures: []
    });

    dateTo.setDate(new Date().getDate() + 1);

    const BLANK_FORM = {
      basePrice: 0,
      dateFrom: new Date(),
      dateTo: dateTo,
      destination: destinationsFromServer.find((destination) => destination.id === '1').id,
      isFavorite: false,
      offers: [],
      type: 'flight'
    };

    return {
      BLANK_FORM: BLANK_FORM,
      offersFromServer: offersFromServer,
      destinationsFromServer: destinationsFromServer,
      waypointsApiService: waypointsApiService
    };
  } catch(err) {
    render(new FailedLoadDataView, siteTripInfoElement);
    throw new Error('Failed to load latest route information');
  }
}

export {getDataFromServer};
