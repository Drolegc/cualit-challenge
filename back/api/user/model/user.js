const { DataTypes } = require('sequelize');
let Usuario
module.exports = {
    define(sequelize) {
        Usuario = sequelize.define('user', {

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
    },

    find(condition = null) {
        return Usuario.findAll({ where: condition })
    },

    create(data) {
        return Usuario.create(data)
    }
}