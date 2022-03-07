const _ = require('lodash')
const { DataTypes, Sequelize } = require('sequelize');
const Op = Sequelize.Op;
let Tutorial
module.exports = {
    define(sequelize) {
        Tutorial = sequelize.define('tutorial', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            url: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.STRING,
            },
            published_status: {
                allowNull: false,
                defaultValue: true,
                type: DataTypes.BOOLEAN,
            },
            deleted_at: {
                type: DataTypes.DATE,
            },
        });
    },

    find(condition = null) {

        if (_.has(condition, 'title_includes')) {
            const titleLike = condition.title_includes
            condition.title = {
                [Op.like]: `%${titleLike}%`

            }
            delete condition.title_includes
        }

        return Tutorial.findAll({ where: condition })
    },

    findOne(id) {
        return Tutorial.findByPk(id)
    },

    create(data) {
        return Tutorial.create(data)
    },

    update(data, id) {
        return Tutorial.update(data, {
            where: {
                id
            },
            returning: true,
            plain: true
        })
    }
}