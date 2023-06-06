const { Posts } = require('../models');

const postSeeds = [
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
];

const seedPosts = () => Posts.bulkCreate(postSeeds);

module.exports = seedPosts;
