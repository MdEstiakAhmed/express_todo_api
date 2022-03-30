const User = require("../../models/User");

module.exports = update = async (req, res) => {
    try {
        let updateData = {};
        req.body.firstName && (updateData.firstName = req.body.firstName);
        req.body.lastName && (updateData.lastName = req.body.lastName);
        req.body.email && (updateData.email = req.body.email);
        req.body.phone && (updateData.phone = req.body.phone);
        req.body.country && (updateData.country = req.body.country);
        req.body.password && (updateData.password = req.body.password);
        req.body.dob && (updateData.dob = req.body.dob);

        if (req.headers.username === req.params.username) {
            let response = await User.updateOne({ username: req.headers.username }, { $set: updateData }, { upsert: true });
            if(response.acknowledged){
                return res.status(200).json({ status: true, message: "successfully updated" });
            }
            else{
                return res.status(400).json({ status: false, message: "update failed" });
            }
        }
        else {
            return res.status(401).json({ status: false, message: 'user not found' });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}