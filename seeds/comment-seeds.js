const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Super interesting!',
    user_id: 6,
    post_id: 10
  },
  {
    comment_text: 'really cool!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'I did not know this!',
    user_id: 3,
    post_id: 9
  },
  {
    comment_text: 'Mmm not sure how I feel about this',
    user_id: 2,
    post_id: 9
  },
  {
    comment_text: 'Big if true!',
    user_id: 1,
    post_id: 8
  },
  {
    comment_text: 'I have no idea what you are saying',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'I would retweet this if I could',
    user_id: 5,
    post_id: 7
  },
  {
    comment_text: 'I do not believe it.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'interesante',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Wow! Never knew that',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'wow',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'very cool!',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text:
      'interesting theory!',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text:
      'Learned something new!',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Interesting thoughts.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'good to know',
    user_id: 1,
    post_id: 5
  },
  {
    comment_text:
      'I like this take.',
    user_id: 2,
    post_id: 5
  },
  {
    comment_text: 'good to know.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text:
      'always learning something new from you!.',
    user_id: 6,
    post_id: 6
  },
  {
    comment_text:
      'Haha! Hilarious!',
    user_id: 6,
    post_id: 7
  },
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
