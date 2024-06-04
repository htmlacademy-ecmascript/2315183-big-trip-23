export default class OffersModel {
  #offers = [];

  getOffer() {
    return this.#offers;
  }

  async init() {

  }

  updateOffers(updateType, update) {
    const index = this.#offers.findIndex((offer) => offer.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    this.#offers = [
      ...this.#offers.slice(0, index),
      update,
      ...this.#offers.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addOffers(updateType, update) {
    this.#offers = [
      update,
      ...this.#offers
    ];

    this._notify(updateType, update);
  }

  deleteOffers(updateType, update) {
    const index = this.#offers.findIndex((offer) => offer.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    this.#offers = [
      ...this.#offers.slice(0, index),
      ...this.#offers.slice(index + 1)
    ];

    this._notify(updateType, update);
  }
}
