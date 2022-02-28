'use strict';
const tutorialModel = require('../model/tutorial')

module.exports = {

    async create(req, res) {
        const data = req.body
        const entity = await tutorialModel.create(data)
        res.send(entity)
    },

    async updateOne(req, res) {
        const data = req.body
        const id = req.params.id
        const entity = await tutorialModel.update(data, id)
        res.send(entity)

    },

    async deleteOne(req, res) {
        const id = req.params.id
        const data = {
            published_status: false
        }
        const entity = await tutorialModel.update(data, id)
        res.send(entity)

    },

    async deleteAll(req, res) {

        const condition = {
            published_status: true
        }
        const entities = await tutorialModel.find(condition)

        entities.forEach(entity => tutorialModel.update({
            published_status: false
        }, entity.id))

        res.send(entities)
    },

    async find(req, res) {

        const condition = req.query
        condition['published_status'] = true

        const entities = await tutorialModel.find(condition)
        res.send(entities)
    },

    async findOne(req, res) {
        const entity = await tutorialModel.findOne(req.params.id)
        res.send(entity)
    }
}