const sequelize = require('../config/connection');
const seedHome = require('./homeData');
const seedBeginner = require('./beginnerData');
const seedIntermediate = require('./intermediateData');
const seedAdvanced = require('./advancedData');
const seedCollection = require('./collectionData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedHome();

  await seedBeginner();

  await seedIntermediate();

  await seedAdvanced();
  
  await seedCollection();

  process.exit(0);
};

seedAll();

