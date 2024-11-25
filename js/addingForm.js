import {isEscape} from './utils.js';
const maxHashtags = 5;
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorMessages = {
  countExceeded: `Максимум ${maxHashtags} хэштегов`,
  notUnique: 'Хэштеги должны быть уникальными',
  invalidFormat: 'Некорректный хэштег'
};

const documentBody = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');
const uploadModal = imageUploadForm.querySelector('.img-upload__overlay');
const hashtagsInputField = imageUploadForm.querySelector('.text__hashtags');

const pristineValidator = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const displayForm = () => {
  uploadModal.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideForm = () => {
  imageUploadForm.reset();
  pristineValidator.reset();
  uploadModal.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const parseTags = (inputString) => inputString.trim().split(' ').filter((currentTag) => Boolean(currentTag.length));
const isFocusedOnInput = () => document.activeElement === hashtagsInputField || document.activeElement === imageUploadForm.querySelector('.text__description');
const validateTagCount = (inputValue) => parseTags(inputValue).length <= maxHashtags;
const validateHashtagsFormat = (inputValue) => parseTags(inputValue).every((tag) => hashtag.test(tag));

const validateUniqueTags = (inputValue) => {
  const lowercaseTags = parseTags(inputValue).map((currentTag) => currentTag.toLowerCase());
  return lowercaseTags.length === new Set(lowercaseTags).size;
};

function onDocumentKeydown(evt) {
  if (isEscape && !isFocusedOnInput()) {
    evt.preventDefault();
    hideForm();
  }
}

const handleCancelClick = () => hideForm();
const handleInputChange = () => displayForm();

pristineValidator.addValidator(
  hashtagsInputField,
  validateUniqueTags,
  ErrorMessages.notUnique,
  1,
  true
);

pristineValidator.addValidator(
  hashtagsInputField,
  validateHashtagsFormat,
  ErrorMessages.invalidFormat,
  2,
  true
);

pristineValidator.addValidator(
  hashtagsInputField,
  validateTagCount,
  ErrorMessages.countExceeded,
  3,
  true
);

imageUploadForm.querySelector('.img-upload__input').addEventListener('change', handleInputChange);
imageUploadForm.querySelector('.img-upload__cancel').addEventListener('click', handleCancelClick);
