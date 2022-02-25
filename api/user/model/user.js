const { DataTypes } = require('sequelize');

module.exports = {
    define(sequelize) {
        sequelize.define('user', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            username: {
                allowNull: false,
                type: DataTypes.STRING,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });
    }
}