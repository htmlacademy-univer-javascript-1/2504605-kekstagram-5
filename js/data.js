// создаем данные

import { getRandomInteger, getRandomArrayElement } from './util.js';

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];

const names = [
  'Артём',
  'Мария',
  'Иван',
  'Ольга',
  'Сергей',
  'Елена',
  'Дмитрий',
];

export function generateComments() {
  const commentsCount = getRandomInteger(0, 30); // Случайное количество комментариев
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    const comment = {
      id: i + 1,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(messages),
      name: getRandomArrayElement(names)
    };
    comments.push(comment);
  }

  return comments;
}

export function createPhoto(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии номер ${id}`,
    likes: getRandomInteger(15, 200),
    comments: generateComments() // коммент
  };
}

export function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i)); // фото в массив
  }
  return photos;
}
