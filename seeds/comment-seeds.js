const { Comment } = require('../models');

const commentData = [{
        comment_text: "This is a JOKE :)",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Maybe it is not",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Yea this is a joke",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;