const { Post } = require('../models');

const postData = [{
        title: 'Fantasy Football',
        content: 'Best Game Eveerrrrrrr',
        user_id: 1

    },
    {
        title: 'Fox News',
        content: 'Amet aliquam id diam maecenas ultricies mi eget',
        user_id: 2
    },
    {
        title: 'Basketball',
        content: 'Ut etiam sit amet nisl mollis purus in bldscfahj defwdfh.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;