const Collection = require('../models/Collection');

const collectionData= [
    {
        name: 'Beginner',

    },

    {
    name: 'Intermediate'
    },

    {
     name:'Advanced'
    },
];

const seedCollection = () => Collection.bulkCreate(collectionData);
module.exports = seedCollection;