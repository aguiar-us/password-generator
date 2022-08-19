module.exports = {
    express: require('express'),
    router: require('../routers/routes'),
    error: {
        handler: require('../errors/handler/handler')
    }
}