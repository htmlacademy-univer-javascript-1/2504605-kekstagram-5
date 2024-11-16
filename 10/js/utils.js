/* eslint-disable curly */
const getRandomInt = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const randomIdInRange = (bottom, top) => {
  const usedIDs = [];

  return function() {
    if (usedIDs.length >= (top - bottom + 1)) {
      return null;
    }

    let currentInt;
    do {
      currentInt = getRandomInt(bottom, top);
    } while (usedIDs.includes(currentInt));

    usedIDs.push(currentInt);
    return currentInt;
  };
};

const isEscape = (evt) => evt.key === 'Escape';

const randomValueFromArray = (currentArray) => {
  if (currentArray.length === 0)
    return null;
  return currentArray[getRandomInt(0, currentArray.length - 1)];
};

export {
  getRandomInt,
  randomIdInRange,
  randomValueFromArray,
  isEscape
};
