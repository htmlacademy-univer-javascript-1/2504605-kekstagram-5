// вспомогательные функции

export function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

export function getRandomArrayElement(elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}
