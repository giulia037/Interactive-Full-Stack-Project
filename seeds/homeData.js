const { Home } = require('../models');

const homedata = [
  {
    name: 'Beginner',
    description: 'Click here to start your elarning adventure!'
  },
  {
    name: 'Intermediate',
    description: 'Are you ready to continue? You can do it!'
  },
  {
    name: 'Advanced',
    description: 'Look at you go! Almost done!'
  },
  
];

const seedHome = () => Home.bulkCreate(homedata);

module.exports = seedHome;

