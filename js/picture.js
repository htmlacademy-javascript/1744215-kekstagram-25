const pictureTemplateElement = document.querySelector('#picture')
    .content
    .querySelector('.picture');

const renderPicture = (picture) => {
  const { url, comments, likes } = picture;
  const pictureElement = pictureTemplateElement.cloneNode(true);
  
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  
  return pictureElement;
};

export {
  renderPicture,
};