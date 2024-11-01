
const getRandomInt = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const randomIdInRange = (min, max) => {
  const usedIDs = [];

  return function() {
    if (usedIDs.length >= (max - min + 1)) {
      return null;
    }

    let currentId;
    do {
      currentId = getRandomInt(min, max);
    } while (usedIDs.includes(currentId));

    usedIDs.push(currentId);
    return currentId;
  };
};

const isEscape = (event) => event.key === 'Escape';

const randomValueFromArray = (array) => array[getRandomInt(0, array.length - 1)];

export {
  getRandomInt,
  randomIdInRange,
  randomValueFromArray,
  isEscape
};
