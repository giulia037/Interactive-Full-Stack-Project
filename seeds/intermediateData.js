const { Intermediate } = require('../models');

const intermediatedata = [
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

const seedIntermediate = () => Intermediate.bulkCreate(intermediatedata);

module.exports = seedIntermediate;
