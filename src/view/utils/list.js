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
  const weight = getWeightForNullDate(waypointA.dueDate, waypointB.dueDate);

  return weight ?? dayjs(waypointA.dueDate).diff(dayjs(waypointB.dueDate));
}

function sortListByPrice(waypointA, waypointB) {
  return waypointB.price - waypointA.price;
}

function sortListByTime(waypointA, waypointB) {
  const weight = getWeightForNullDate(waypointA.time.from, waypointB.time.from);

  return weight ?? dayjs(waypointB.time.from).diff(dayjs(waypointA.time.from));
}

export { humanizeDueDate, isListElementFuture, isListElementPresent, isListElementPast, sortListByDate, sortListByPrice, sortListByTime};
