const pictureContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const makeAllPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach(({url, description, likes, comments}) => {
    const newPicture = photoTemplate.cloneNode(true);
    const image = newPicture.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    newPicture.querySelector('.picture__comments').textContent = comments.length;
    newPicture.querySelector('.picture__likes').textContent = likes;
    fragment.appendChild(newPicture);
  });

  pictureContainer.appendChild(fragment);
};

export {makeAllPictures};
