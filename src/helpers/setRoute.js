const authRoute = require('../routes/authRoute');

const routes = [
    {
        path: '/auth',
        handler: authRoute
    },
];

module.exports = app => {
    routes.forEach(route => {
        app.use(`${process.env.ENDPOINT_BASE_URL}${route.path}`, route.handler);
    });
}