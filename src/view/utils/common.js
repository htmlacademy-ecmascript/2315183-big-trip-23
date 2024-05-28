function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomTrueOrFalse() {
  return Math.random() < 0.5;
}

function getUpperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { getRandomArrayElement, getRandomNumber, getRandomTrueOrFalse, getUpperCaseFirstLetter };
