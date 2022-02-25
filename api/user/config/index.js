const routes = require('./routes')
const controllers = require('../controller')
const userMiddlewares = require('../middleware')
const _ = require('lodash')

const getMiddlewares = (middlewares) => {

    return Object.entries(userMiddlewares).filter((userMiddleware) => {
        const key = _.first(userMiddleware)
            //const fn = _.last(userMiddleware)
        return (middlewares.includes(key))
    }).map((uM) => _.last(uM))
}

const init = (app) => {
    routes.forEach(route => {
        const { method, path, handler, middlewares } = route

        if (!_.isEmpty(middlewares)) {
            app[method](path, getMiddlewares(middlewares), controllers[handler])
            return
        }

        app[method](path, controllers[handler])

    })
}

module.exports = { init }