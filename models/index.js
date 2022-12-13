const User = require('./User');
const Collection = require('./Collection');
const Beginner = require('./Beginner');
const Intermediate = require('./Intermediate');
const Advanced = require('./Advanced');
const Book = require('./Book')


              Advanced.hasMany(Book, {
                  foreignKey: 'aBook_id',
              });
              Beginner.hasMany(Book, {
                  foreignKey: 'bBook_id',
              });
              Intermediate.hasMany(Book, {
                  foreignKey: 'iBook_id',
              });
              Collection.hasOne(Advanced,{
                foreignKey:'collection_id'
              })
              Collection.hasOne(Beginner,{
                foreignKey:'collection_id'
              })
              Collection.hasOne(Intermediate,{
                foreignKey:'collection_id'
              })

module.exports = { Intermediate, Beginner, Advanced, Book, User, Collection};