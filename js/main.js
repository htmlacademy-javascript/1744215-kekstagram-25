import {createPhotos} from './random-photos.js';

const photos = createPhotos(3,
  {
    comments: {
      min: 10,
      max: 25,
    },
  });

console.log(photos);

// {
//   comments: {
//     min: 10,
//     max: 10,
//   },
// }
