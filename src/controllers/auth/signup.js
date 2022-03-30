const User = require("../../models/User");

module.exports = signup = async(req, res) => {
    try {
        let reqBody = req.body;
        if (!reqBody.firstName) { return res.status(400).json({ status: false, message: 'first name required' }); }
        if (!reqBody.lastName) { return res.status(400).json({ status: false, message: 'last name required' }); }
        if (!reqBody.email) { return res.status(400).json({ status: false, message: 'email required' }); }
        if (!reqBody.username) { return res.status(400).json({ status: false, message: 'username required' }); }
        if (!reqBody.password) { return res.status(400).json({ status: false, message: 'password required' }); }

        let username = await User.exists({username: reqBody.username});
        if(username) {return res.status(400).json({ status: false, message: 'username already exist' });}

        let response = await User.create(reqBody);
        if(response._id) return res.status(200).json({ status: true, message: 'successfully added' });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}