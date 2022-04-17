import { checkDuplicates } from './util/common.js';

const HashTagValue = {
  MAX_LIMIT: 5,
  MAX_LENGTH: 20,
};

const validHashtagRegexp = /^#[A-Za-zА-Яа-яЁё0-9]+$/;

const parseHashtags = (value) => value.trim().toLowerCase().split(' ');

const validateMask = (value) => value === '' ||
  parseHashtags(value).every((hashtag) => validHashtagRegexp.test(hashtag));

const validateQuantity = (value) => {
  const hashtags = parseHashtags(value);
  return hashtags.length <= HashTagValue.MAX_LIMIT;
};

const validateDuplicates = (value) => value === '' || 
  ! checkDuplicates(parseHashtags(value));

const validateLength = (value) => value === '' ||
  parseHashtags(value).every((hashtag) => hashtag.length <= HashTagValue.MAX_LENGTH);

export {
  validateMask,
  validateQuantity,
  validateDuplicates,
  validateLength,
};