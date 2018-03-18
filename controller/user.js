module.exports = {
    async getUser(ctx, service, app) {
        await service.userService.storeInfo();
        ctx.body = app.config.appName;
    },
    async getUserInfo(ctx) {
        ctx.body = 'getUserInfo';
    }
};