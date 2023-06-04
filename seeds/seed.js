const commentSeeds = require('./Comments-seeds');
const userSeeds = require('./User-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await userSeeds();
    console.log('\n----- USERS SEEDED -----\n');

    await commentSeeds();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};
  
seedAll();
 