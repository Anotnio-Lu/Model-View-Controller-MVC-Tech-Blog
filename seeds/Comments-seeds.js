const { Comments } = require('../models');

const commentSeeds = [
  {
    user_id: 1,
    post_title: 'First Post',
    comment: 'This is a great post!',
    date_created: new Date(),
  },
  {
    user_id: 2,
    post_title: 'Second Post',
    comment: 'I completely agree with you.',
    date_created: new Date(),
  },
  // Add more seed data as needed
];

const seedComments = () => Comments.bulkCreate(commentSeeds);

module.exports = seedComments;
