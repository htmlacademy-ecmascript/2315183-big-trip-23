import dayjs from 'dayjs';

//const DATE_FORMAT = 'D MMMM';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function humanizeDueDate(dueDate, dateFormat) {
  return dueDate ? dayjs(dueDate).format(dateFormat) : '';
}

export { getRandomArrayElement, getRandomNumber, humanizeDueDate };
