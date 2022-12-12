const Collection = require('./Collection');
const Advanced = require('./Advanced');
const Intermediate = require('./Intermediate');
const Beginner = require('./Beginner');

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