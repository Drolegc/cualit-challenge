const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './config/database.sqlite',
    logQueryParameters: true,
    benchmark: true
});
const userModel = require('../api/user/model/user')
const tutorialModel = require('../api/tutorial/model/tutorial')

const init = async() => {

    try {

        await sequelize
            .authenticate()

        console.log('Connection has been established successfully.');

        userModel.define(sequelize)
        tutorialModel.define(sequelize)

        await sequelize.sync({ force: false })

    } catch (err) {
        console.error('Unable to connect to the database:', err);

    }
}

init()

module.exports = sequelize;