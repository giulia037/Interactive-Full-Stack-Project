const { Collection } = require('../models');

const collectionData= [
    {
        name: 'Beginner',
        collection_id: 1,

    },

    {
    name: 'Intermediate',
    collection_id: 2,
    },

    {
     name:'Advanced',
     collection_id:3,
    }
]

const seedCollection = () => Collection.bulkCreate(collectionData);
module.exports = seedCollection;