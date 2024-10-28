import { generateComment } from './comment.js';
import { getRandomInt } from './utils.js';

export function generatePhoto(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: `Представьте, что здесь описание фотографии ${index}`,
    likes: getRandomInt(15, 200),
    comments: [],
    generateComments() {
      const commentCount = getRandomInt(0, 30);
      for (let j = 0; j < commentCount; j++) {
        this.comments.push(generateComment());
      }
    },
  };
}

