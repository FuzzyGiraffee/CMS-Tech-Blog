const { Post } = require('../models');

const postdata = [
  {
    title: 'What can help us break warp 10?',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla deserunt blanditiis reprehenderit labore voluptatem, consectetur soluta corporis veritatis at dolorem velit earum quis placeat doloribus debitis voluptates magni maiores.',
    user_id: 2
  },
  {
    title: 'Troubleshooting malfunctioning tricorders.',
    contents: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur. Vitae quo dicta qui voluptatibus sit alias nisi, ducimus suscipit sint atque corrupti necessitatibus eos dolor iure. Reiciendis, iusto unde!',
    user_id: 2
  },
  {
    title: 'This is what gives the warp core its distinctive sound',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur adipisci et fuga, magnam voluptatibus voluptatem, velit odit atque ducimus aut architecto illum! Totam ratione unde soluta nobis ex? Harum.',
    user_id: 1
  },
  {
    title: 'Inside the Holodeck: a Tech Tour',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eos tempore facilis sequi ut voluptatibus omnis voluptate nemo? Illum ipsam dolores reprehenderit repellendus voluptatem iure quibusdam dolorum fuga natus facere?',
    user_id: 4
  },
 
  {
    title: 'Why do things always go bad in the holodeck?',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione provident quisquam minima impedit beatae, excepturi possimus voluptatibus iusto officiis! Quam architecto minus sunt dolore deleniti impedit, dolorem commodi quaerat magnam!',
    user_id: 4
  },
  {
    title: 'How to power the main impulse engines.',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur adipisci et fuga, magnam voluptatibus voluptatem, velit odit atque ducimus aut architecto illum! Totam ratione unde soluta nobis ex? Harum.',
    user_id: 5
  },
  {
    title: 'Bussard collector maintainence is super important.',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eos tempore facilis sequi ut voluptatibus omnis voluptate nemo? Illum ipsam dolores reprehenderit repellendus voluptatem iure quibusdam dolorum fuga natus facere?',
    user_id: 1
  },
  {
    title: 'Warp Nacelles are Neat!',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione provident quisquam minima impedit beatae, excepturi possimus voluptatibus iusto officiis! Quam architecto minus sunt dolore deleniti impedit, dolorem commodi quaerat magnam!',
    user_id: 3
  },
  {
    title: 'Making sure your torpedo launchers are secured',
    contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur adipisci et fuga, magnam voluptatibus voluptatem, velit odit atque ducimus aut architecto illum! Totam ratione unde soluta nobis ex? Harum.',
    user_id: 5
  },
  {
    title: 'What to do when the Jeffrey Tubes are making weird sounds',
    contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eos tempore facilis sequi ut voluptatibus omnis voluptate nemo? Illum ipsam dolores reprehenderit repellendus voluptatem iure quibusdam dolorum fuga natus facere?',
    user_id: 3
  },

  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

