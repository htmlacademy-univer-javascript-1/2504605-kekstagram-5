import { getRandomInt, randomIdInRange, randomValueFromArray } from './utils.js';

const userNames = ['Артем', 'Мария', 'Иван', 'Ольга', 'Сергей', 'Елена'];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, убирайте палец из кадра. Это непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом, и у нее получилась лучшея фотография.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота — и у меня вышла фотография лучше.',
  'У людей на фото перекошены лица. Как можно было поймать такой неудачный момент?!',
];

const photoCount = 25;

const generateRandomPhotoID = randomIdInRange(1, photoCount);
const generateRandomMessageID = randomIdInRange(1, 20);

const createComment = () => ({
  id: generateRandomMessageID(),
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: randomValueFromArray(messages),
  name: randomValueFromArray(userNames),
});

const createPhoto = () => {
  const id = generateRandomPhotoID();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Представьте, что здесь описание фотографии ${id}`,
    likes: getRandomInt(15, 200),
    comments: Array.from({ length: getRandomInt(0, 30) }, createComment),
  };
};

const getPosts = () => Array.from({ length: photoCount }, createPhoto);

export { getPosts };
