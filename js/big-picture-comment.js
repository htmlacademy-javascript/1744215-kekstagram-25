const commentTemplateElement = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');

const renderComment = (comment) => {
  const { avatar, name, message } = comment;

  const commentElement = commentTemplateElement.cloneNode(true);
  const pictureElement = commentElement.querySelector('.social__picture');
  pictureElement.src = avatar;
  pictureElement.alt = name;

  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

export {
  renderComment,
};
