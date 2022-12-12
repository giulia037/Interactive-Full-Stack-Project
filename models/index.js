const User = require('./User');
const Collection = require('./Collection');
const Beginner = require('./Beginner');
const Intermediate = require('./Intermediate');
const Advanced = require('./Advanced');


Advanced.hasMany(Book, {
    foreignKey: 'aBook_id',
});
Beginner.hasMany(Book, {
    foreignKey: 'bBook_id',
});
Intermediate.hasMany(Book, {
    foreignKey: 'iBook_id',
});
module.exports = { Intermediate, Beginner, Advanced};