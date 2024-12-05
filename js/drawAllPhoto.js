import { isEscape } from './utils.js';

const COMMENT_STEP = 5;
const bigPictureElement = document.querySelector('.big-picture');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');
const imageElement = bigPictureElement.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesNumber = bigPictureElement.querySelector('.likes-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const commentsContainer = bigPictureElement.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector('.social__comment');
const commentsLoaderButton = bigPictureElement.querySelector('.comments-loader');
const commentsCounter = bigPictureElement.querySelector('.social__comment-count');

let currentPhoto;
let currentCommentIndex = 0;

const makeEmptyComments = () => {
  commentsContainer.innerHTML = '';
};

const remakeComment = (comment) => {
  const remadeComment = commentTemplate.cloneNode(true);
  const userAvatar = remadeComment.querySelector('.social__picture');
  userAvatar.src = comment.avatar;
  userAvatar.alt = comment.name;
  remadeComment.querySelector('.social__text').textContent = comment.message;
  return remadeComment;
};

const renderComments = () => {
  let currentIndex = 0;
  for (let i = currentCommentIndex; i < currentCommentIndex + COMMENT_STEP; i++) {
    if (i === currentPhoto.comments.length) {
      commentsLoaderButton.classList.add('hidden');
      currentIndex = i - 1;
      break;
    }
    currentIndex = i;
    commentsContainer.appendChild(remakeComment(currentPhoto.comments[i]));
  }
  currentCommentIndex = currentIndex + 1;
  commentsCounter.innerHTML = `${currentCommentIndex} из <span class="comments-count">${currentPhoto.comments.length}</span> комментариев`;
};

const remakePhoto = () => {
  imageElement.src = currentPhoto.url;
  bigPictureLikesNumber.textContent = currentPhoto.likes;
  descriptionElement.textContent = currentPhoto.description;

  makeEmptyComments();
  renderComments(currentPhoto);
};

const listenKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeBigPost();
  }
};

const onClosePostClick = () => closeBigPost();
const onCommentsLoaderButtonClick = () => renderComments();

const openBigPost = (currentPost) => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', listenKeydown);
  closeButton.addEventListener('click', onClosePostClick);
  commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);
  currentPhoto = currentPost;
  remakePhoto();
};

function closeBigPost() {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoaderButton.classList.remove('hidden');
  document.removeEventListener('keydown', listenKeydown);
  closeButton.removeEventListener('click', onClosePostClick);
  commentsLoaderButton.removeEventListener('click', onCommentsLoaderButtonClick);
  currentCommentIndex = 0;
}

export {openBigPost};
