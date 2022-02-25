const routes = require('./routes')
const controllers = require('../controller')

const init = (app) => {
    routes.forEach(route => {
        const { method, path, handler } = route
        app[method](path, controllers[handler])
    })
}

module.exports = { init }