const { Intermediate } = require('../models');

const intermediateData = [
  {
    id: 1,
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    iBook_id: 1,
  },
  {
    id: 2,
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    iBook_id: 2,
  },
  {
    id: 3,
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    iBook_id: 3,
  },
  {
    id: 4,
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    iBook_id: 4,
  },
  {
    id: 5,
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    iBook_id: 5,
  },
];

const seedIntermediate = () => Intermediate.bulkCreate(intermediateData);

module.exports = seedIntermediate;
