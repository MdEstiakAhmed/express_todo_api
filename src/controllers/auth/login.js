var jwt = require('jsonwebtoken');
const User = require("../../models/User");

module.exports = login = async (req, res) => {
    try {
        if (!req.body.username) { return res.status(400).json({ status: false, message: 'username required' }); }
        if (!req.body.password) { return res.status(400).json({ status: false, message: 'password required' }); }

        let user = await User.findOne({ username: req.body.username, password: req.body.password }, {password: 0});
        if (!user) return res.status(401).json({ status: false, message: 'username and password doesn\'t match' });
        else if (user._id) {
            var token = jwt.sign(
                { _id: user._id, username: user.username },
                process.env.APP_SECRET_KEY,
                { expiresIn: "24h" }
            );
            return res.status(200).json({ status: true, message: 'successfully login', data: {token, user} });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}