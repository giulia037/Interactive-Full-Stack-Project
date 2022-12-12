const { Advanced } = require('../models');

const advanceddata = [
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    aBook_id: 1,
  },
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    aBook_id: 2,
  },
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    aBook_id: 3,
  },
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    aBook_id: 4,
  },
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true',
    aBook_id: 5,
  },
];

const seedAdvanced = () => Advanced.bulkCreate(advanceddata);

module.exports = seedAdvanced;
