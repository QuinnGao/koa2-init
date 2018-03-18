module.exports = (app) => {
    return {
        'get /user': app.controller.user.getUser
    }
}