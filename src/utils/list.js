import dayjs from 'dayjs';

function humanizeDueDate(dueDate, dateFormat) {
  return dueDate ? dayjs(dueDate).format(dateFormat) : '';
}

function isListElementFuture(dueDate) {
  return dueDate && dayjs().isBefore(dueDate, 'D');
}

function isListElementPresent(dueDate) {
  return dueDate && dayjs(dueDate).isSame(dayjs(), 'D');
}

function isListElementPast(dueDate) {
  return dueDate && dayjs().isAfter(dueDate, 'D');
}

function isListElementHaveOffers(listElement) {
  return listElement.length !== 0;
}

function getWeightForNullDate(dateA, dateB) {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
}

function sortListByDate(waypointA, waypointB) {
  const weight = getWeightForNullDate(waypointA.dateFrom, waypointB.dateFrom);

  return weight ?? dayjs(waypointA.dateFrom).diff(dayjs(waypointB.dateFrom));
}

function sortListByPrice(waypointA, waypointB) {
  return waypointB.basePrice - waypointA.basePrice;
}

function sortListByTime(waypointA, waypointB) {
  const minuteDuractionB = dayjs(waypointB.dateFrom).diff(waypointB.dateTo, 'm');
  const minuteDuractionA = dayjs(waypointA.dateFrom).diff(waypointA.dateTo, 'm');

  return minuteDuractionA - minuteDuractionB;
}

function isDatesEqual(dateA, dateB) {
  return (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');
}

function getNeededOffers(allOffers, type, offers) {
  const currentOffers = [];

  allOffers.forEach((offer) => {
    if (offer.type === type) {
      offer.offers.forEach((offerId) => {
        offers.forEach((listOffers) => {
          if (offerId.id === listOffers) {
            currentOffers.push(offerId);
          }
        });
      });
    }
  });

  return currentOffers;
}

function getOffersByType(allOffers, type) {
  const offersByType = allOffers?.find((offers) => offers.type === type).offers;
  const currentOffers = [];

  offersByType.forEach((offer) => {
    currentOffers.push(offer.id);
  });

  return currentOffers;
}

function getCurrentDestination(allDestinations, destinationId) {
  return allDestinations?.find((destination) => destination.id === destinationId);
}

function getCurrentDestinationByName(allDestinations, name) {
  return allDestinations?.find((destination) => destination.name === name);
}

function getAllElementsByKey(elements, elementKey) {
  const array = [];
  elements.forEach((element) => {
    array.push(element[elementKey]);
  });

  return array;
}

const getHeaderInfoRow = (points, destinations) => {
  const tripCities = points.map(
    ({destination}) => destinations.find(({id}) => id === destination).name
  );

  const citiesLength = tripCities.length;

  const first = tripCities[0];
  const last = tripCities[tripCities.length - 1];

  if (citiesLength <= 1 || first === last) {
    return first || '';
  }

  const twoCitiesRow = `${first}  &mdash;  ${last}`;

  if (citiesLength === 2) {
    return twoCitiesRow;
  }

  const uniqCities = [...new Set(tripCities)];
  const uniqCitiesLength = uniqCities.length;

  switch (uniqCitiesLength.length) {
    case 2: {
      const lastUniqueCity = uniqCities[uniqCitiesLength - 1];
      const indexOfLastUnique = tripCities.indexOf(lastUniqueCity);

      const isLastUniqueCityInMiddle = indexOfLastUnique > 0 && indexOfLastUnique < citiesLength - 1;

      return isLastUniqueCityInMiddle
        ? `${first}  &mdash;  ${lastUniqueCity} &mdash;  ${first}`
        : twoCitiesRow;
    }

    case 3: return uniqCities.join(' &mdash; ');
    default: return `${first}   &mdash;  ...  &mdash;   ${last}`;
  }
};

export {
  humanizeDueDate,
  isListElementFuture,
  isListElementPresent,
  isListElementPast,
  sortListByDate,
  sortListByPrice,
  sortListByTime,
  isListElementHaveOffers,
  isDatesEqual,
  getNeededOffers,
  getCurrentDestination,
  getOffersByType,
  getCurrentDestinationByName,
  getAllElementsByKey,
  getHeaderInfoRow
};
