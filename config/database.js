const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './config/database.sqlite',
    logQueryParameters: true,
    benchmark: true
});
const userModel = require('../api/user/model/user')

const init = async() => {

    try {

        await sequelize
            .authenticate()

        console.log('Connection has been established successfully.');

        userModel.define(sequelize)

        await sequelize.sync({ force: true })

    } catch (err) {
        console.error('Unable to connect to the database:', err);

    }
}

init()

module.exports = sequelize;