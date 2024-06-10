function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getUpperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getAllElementsByKey(elements, elementKey) {
  const array = [];
  elements.forEach((element) => {
    array.push(element[elementKey]);
  });

  return array;
}

export { getRandomArrayElement, getRandomNumber, getUpperCaseFirstLetter, getAllElementsByKey };
