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
  return having.some((elem) => Object.values(elem)[2] === true);
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
  const minuteDuractionB = dayjs(waypointB.timeFrom).diff(waypointB.timeTo, 'm');
  const minuteDuractionA = dayjs(waypointA.timeFrom).diff(waypointA.timeTo, 'm');

  return minuteDuractionA - minuteDuractionB;
}

function isDatesEqual(dateA, dateB) {
  return (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');
}

function getCurrentDay() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = `${mm}/${dd}/${yyyy}`;
  return today;
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
  isDatesEqual,
  getCurrentDay
};
