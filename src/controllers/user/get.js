const User = require("../../models/User");

module.exports = get = async (req, res) => {
    try {
        if (req.headers.username === req.params.username) {
            let user = await User.findOne({ username: req.params.username }, { password: 0 });
            if (!user) return res.status(401).json({ status: false, message: 'user not found' });
            else if (user._id) {
                return res.status(200).json({ status: true, data: user });
            }
        }
        else{
            return res.status(401).json({ status: false, message: 'user not found' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}