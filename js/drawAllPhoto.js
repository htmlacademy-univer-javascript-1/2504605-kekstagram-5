import { isEscape } from './utils.js';

const bigPictureElement = document.querySelector('.big-picture');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const commentsContainer = bigPictureElement.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector('.social__comment');
const commentsLoaderButton = bigPictureElement.querySelector('.comments-loader');
const commentsCounter = bigPictureElement.querySelector('.social__comment-count');

let currentPhotoData;
let commentIndex = 0;

const clearComments = () => {
  commentsContainer.innerHTML = '';
};

const createCommentElement = (commentData) => {
  const commentElement = commentTemplate.cloneNode(true);
  const avatarElement = commentElement.querySelector('.social__picture');
  avatarElement.src = commentData.avatar;
  avatarElement.alt = commentData.name;
  commentElement.querySelector('.social__text').textContent = commentData.message;
  return commentElement;
};

const displayComments = () => {
  let commentsLoaded = 0;
  for (let i = commentIndex; i < commentIndex + 5; i++) {
    if (i >= currentPhotoData.comments.length) {
      commentsLoaderButton.classList.add('hidden');
      break;
    }
    commentsLoaded = i;
    commentsContainer.appendChild(createCommentElement(currentPhotoData.comments[i]));
  }
  commentIndex = commentsLoaded + 1;
  commentsCounter.innerHTML = `${commentIndex} из <span class="comments-count">${currentPhotoData.comments.length}</span> комментариев`;
};

const updatePhotoDisplay = () => {
  imageElement.src = currentPhotoData.url;
  likesCountElement.textContent = currentPhotoData.likes;
  descriptionElement.textContent = currentPhotoData.description;

  clearComments();
  displayComments();
};

const handleKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeBigPost();
  }
};

const openBigPost = (post) => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', handleKeydown);
  currentPhotoData = post;
  updatePhotoDisplay();
};

const closeBigPost = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoaderButton.classList.remove('hidden');
  document.removeEventListener('keydown', handleKeydown);
  commentIndex = 0;
};

closeButton.addEventListener('click', closeBigPost);
commentsLoaderButton.addEventListener('click', displayComments);

export { openBigPost };
