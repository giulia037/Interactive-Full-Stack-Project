const { Advanced } = require('../models');

const advanceddata = [
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true'
  },
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true'
  },
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true'
  },
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true'
  },
  {
    title: 'Book',
    author: 'Author',
    // link: '',
    price: '$12.75',
    audiobook: 'true'
  },
];

const seedAdvanced = () => Advanced.bulkCreate(advanceddata);

module.exports = seedAdvanced;
