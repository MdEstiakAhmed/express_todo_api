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
    {
        path: '*',
        handler: (req, res) => res.status(404).json("not found")
    },
];

module.exports = app => {
    routes.forEach(route => {
        app.use(`${process.env.ENDPOINT_BASE_URL}${route.path}`, route.handler);
    });
}