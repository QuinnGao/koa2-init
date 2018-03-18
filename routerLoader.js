const router = require('koa-router');
const fs = require('fs');
const Router = new router();
const services = require('./loader').loadService();


/**
 * 返回router中间件
 */
const setRouters = (app) => {
    const routers = require('./routers')(app);
    const svs = {};
    services.forEach((service) => {
        svs[service.name] = service.module;
    })
    Object.keys(routers).forEach((key) => {
        const [method, path] = key.split(' ');
        Router[method](path, async (ctx) => {
            const handler = routers[key];
            await handler(ctx, svs, app);
        })
    })
    return Router.routes()
}

module.exports = setRouters;
