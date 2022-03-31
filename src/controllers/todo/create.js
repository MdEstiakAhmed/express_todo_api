const Todo = require("../../models/Todo");

module.exports = create = async(req, res) => {
    try {
        if (!req.body.title) { return res.status(400).json({ status: false, message: 'title required' }); }

        let tempData = {
            username: req.headers.username,
            title: req.body.title,
            description: req.body.description,
            status: 'new'
        }

        let response = await Todo.create(tempData);
        if(response._id) return res.status(200).json({ status: true, message: 'successfully added' });
    } 
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}