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

function isListElementHaveOffers(having) {
  return having.length !== 0;
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

export {
  humanizeDueDate,
  isListElementFuture,
  isListElementPresent,
  isListElementPast,
  sortListByDate,
  sortListByPrice,
  sortListByTime,
  isListElementHaveOffers,
  isDatesEqual
};
