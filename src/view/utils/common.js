function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomTrueOrFalse() {
  return Math.random() < 0.5;
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

function getTimeFromDate(date) {
  return [date.getHours(), date.getMinutes()].map((x) => x < 10 ? `0${x}` : x).join(':');
}

export { getRandomArrayElement, getRandomNumber, updateItem, getTimeFromDate, getRandomTrueOrFalse };
