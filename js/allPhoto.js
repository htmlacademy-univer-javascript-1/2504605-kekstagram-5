import { makeAllPictures } from './drawMiniatures.js';
import { getPosts } from './post.js';
import { openBigPost } from './drawAllPhoto.js';

const allPosts = getPosts();
makeAllPictures(allPosts);

const photoOnClick = (evt) => {
  const currentElement = evt.target.closest('.picture');
  if (currentElement) {
    const imgSrc = currentElement.querySelector('.picture__img').getAttribute('src');
    const currentPicture = allPosts.find((photo) => photo.url === imgSrc);
    if (currentPicture) {
      openBigPost(currentPicture);
    }
  }
};

document.querySelector('.pictures').addEventListener('click', photoOnClick);

