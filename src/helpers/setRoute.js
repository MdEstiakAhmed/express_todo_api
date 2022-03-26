const authRoute = require('../routes/authRoute');
const userRoute = require('../routes/userRoute');
const todoRoute = require('../routes/todoRoute');

const routes = [
    {
        path: '/auth',
        handler: authRoute
    },
    {
        path: '/user',
        handler: userRoute
    },
    {
        path: '/todo',
        handler: todoRoute
    },
];

module.exports = app => {
    routes.forEach(route => {
        app.use(`${process.env.ENDPOINT_BASE_URL}${route.path}`, route.handler);
    });
}