const koa = require('koa');
const setRouters = require('./routerLoader');
const config = require('./loader').loadConfig();
const controllers = require('./loader').loadController();
// const controllers = controllerLoader(); load controller
koa.prototype['controller'] = {};
controllers.forEach((crl) => {
    koa.prototype.controller[crl.name] = crl.module;
});

const app = new koa();

// load configure
config.forEach((config) => {
    app.config = {
        ...config.module
    }
});

app.use(setRouters(app))

app.listen(3000, 'localhost', () => {
    console.log('start');
});
