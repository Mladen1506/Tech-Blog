const { User } = require('../models');

const userData = [{
        username: 'Leo Messi',
        password: 'messi'

    },
    {
        username: 'Djokovic',
        password: 'joker'
    },
    {
        username: 'Lebron',
        password: 'bron'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;