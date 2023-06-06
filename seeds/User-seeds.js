const { User } = require('../models');
const bcrypt = require('bcrypt');

const userSeeds = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: bcrypt.hashSync('password123', 10),
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    password: bcrypt.hashSync('password456', 10),
  },
];

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;
