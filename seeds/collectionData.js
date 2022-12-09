const { Collection } = require('../models');

const collectionData= [
    {
        name: 'Beginner',

    },

    {
    name: 'Intermediate'
    },

    {
     name:'Advanced'
    }
]

const seedCollection = () => Collection.bulkCreate(collectionData);
module.exports = seedCollection;