import { getRandomDestination } from '../mock/destination-mock.js';

export default class DestinationModel {
  getDestination() {
    return getRandomDestination();
  }
}
