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
  const minuteDurationB = dayjs(waypointB.dateFrom).diff(waypointB.dateTo, 'm');
  const minuteDurationA = dayjs(waypointA.dateFrom).diff(waypointA.dateTo, 'm');

  return minuteDurationA - minuteDurationB;
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
  const allElementsByKey = [];
  elements.forEach((element) => {
    allElementsByKey.push(element[elementKey]);
  });

  return allElementsByKey;
}

const getHeaderInfoRow = (waypoints, destinations) => {
  const places = waypoints.map((waypoint) => destinations.find(({id}) => id === waypoint.destination).name);
  const firstPlace = places[0];
  const lastPlace = places.at(-1);
  const middlePlaces = places.slice(1, -1);
  const allUniqCities = Array.from(new Set(places));

  const uniqPlaces = new Set(middlePlaces);

  let count = 0;

  switch(uniqPlaces.size) {
    case 0:
      if (firstPlace === lastPlace) {
        count = 1;
        break;
      }
      count = 2;
      break;
    case 1:
      if (uniqPlaces[0] === firstPlace && uniqPlaces[0] === lastPlace) {
        count = 1;
        break;
      }
      if (uniqPlaces[0] === firstPlace || uniqPlaces[0] === lastPlace) {
        count = 2;
        break;
      }
      count = 3;
      break;
    case 2:
      if (firstPlace === lastPlace) {
        count = 1;
        break;
      }
      if (uniqPlaces[0] === firstPlace && uniqPlaces[1] === lastPlace) {
        count = 2;
        break;
      }
      if (uniqPlaces[0] === firstPlace || uniqPlaces[1] === lastPlace) {
        count = 3;
        break;
      }
      count = 4;
      break;
    case 3:
      if (uniqPlaces[0] === firstPlace && uniqPlaces[2] === lastPlace) {
        if (uniqPlaces[1] === uniqPlaces[0] || uniqPlaces[1] === uniqPlaces[2]) {
          count = 2;
          break;
        }
        count = 3;
        break;
      }
      count = 4;
      break;
    default:
      if (firstPlace === lastPlace) {
        count = 1;
        break;
      }
      count = 4;
      break;
  }

  switch(count) {
    case 1:
      return firstPlace;
    case 2:
      return `${firstPlace} &mdash; ${lastPlace}`;
    case 3:
      return `${firstPlace} &mdash; ${allUniqCities[1]} &mdash; ${lastPlace}`;
    case 4:
      return `${firstPlace} &mdash; ... &mdash; ${lastPlace}`;
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
