const Collection = require('../models/Collection');

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
     name:'Advanced'
    }
]

const seedCollection = () => Collection.bulkCreate(collectionData);
module.exports = seedCollection;