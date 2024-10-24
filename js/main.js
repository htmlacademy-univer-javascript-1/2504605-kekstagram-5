// Временные данные для разработки
const picturesData = [
  {
    url: 'photos/1.jpg',
    description: 'Описание фото 1',
    likes: 12,
    comments: 5
  },
  {
    url: 'photos/2.jpg',
    description: 'Описание фото 2',
    likes: 9,
    comments: 3
  },
  {
    url: 'photos/3.jpg',
    description: 'Описание фото 3',
    likes: 24,
    comments: 10
  },
  // Добавьте больше объектов по мере необходимости
];

// Функция для отрисовки миниатюр
const renderPictures = (pictures) => {
  const picturesContainer = document.querySelector('.pictures'); // Исправлено на правильный выбор селектора
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = document.createElement('div');
    pictureElement.classList.add('picture');

    const img = document.createElement('img');
    img.src = picture.url;
    img.alt = picture.description;
    pictureElement.appendChild(img);

    const likesElement = document.createElement('div');
    likesElement.classList.add('picture__likes');
    likesElement.textContent = `${picture.likes} Likes`; // Корректно используем шаблонные строки
    pictureElement.appendChild(likesElement);

    const commentsElement = document.createElement('div');
    commentsElement.classList.add('picture__comments');
    commentsElement.textContent = `${picture.comments} Comments`; // Корректно используем шаблонные строки
    pictureElement.appendChild(commentsElement);

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

// Ждем загрузки DOM перед вызовом функции
document.addEventListener('DOMContentLoaded', () => {
  renderPictures(picturesData);
});



