import { makeAllPictures } from './drawMiniatures.js';
import { getPosts } from './post.js';
import { openBigPost } from './drawAllPhoto.js';

const posts = getPosts();
makeAllPictures(posts);


const handlePhotoClick = (event) => {
  const pictureElement = event.target.closest('.picture');
  if (pictureElement) {
    const pictureSrc = pictureElement.querySelector('.picture__img').src;
    const selectedPicture = posts.find((photo) => photo.url === pictureSrc);
    openBigPost(selectedPicture);
  }
};

document.querySelector('.pictures').addEventListener('click', handlePhotoClick);
