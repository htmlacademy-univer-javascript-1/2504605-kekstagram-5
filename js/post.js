import { getRandomInt, randomIdInRange, randomValueFromArray } from './utils.js';

const userNames = ['Артем', 'Мария', 'Иван', 'Ольга', 'Сергей', 'Елена'];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Убирайте палец из кадра, это непрофессионально.',
  'Моя бабушка случайно чихнула и сняла лучше.',
  'Я уронил камеру на кота, и получилось лучше.',
  'Лица людей на фотке перекошены, как будто их избивают.',
];

const photoCount = 25;

const randomPhotoID = randomIdInRange(1, photoCount);
const randomMessageID = randomIdInRange(1, 20);

const getComment = () => ({
  id: randomMessageID(),
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`, // Шаблонная строка для пути к аватару
  message: randomValueFromArray(messages),
  name: randomValueFromArray(userNames),
});

const getPhoto = () => {
  const ID = randomPhotoID();

  return {
    id: ID,
    url: `photos/${ID}.jpg`,
    description: `Представьте, что здесь описание фотографии ${ID}`,
    likes: getRandomInt(15, 200),
    comments: Array.from({ length: getRandomInt(0, 30) }, getComment),
  };
};

const getPosts = () => Array.from({ length: photoCount }, getPhoto);

export { getPosts };
