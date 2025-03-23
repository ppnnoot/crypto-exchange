const sequelize = require('../config/database');
const User = require('../models/User');

const seedUsers = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate([
        { name: 'Alice', email: 'alice@example.com', password: '123456' },
        { name: 'Bob', email: 'bob@example.com', password: '123456' },
    ]);

    console.log('Seeded users successfully');
};

seedUsers();
