const Todo = require("../../models/Todo");

module.exports = get = async(req, res) => {
    try {
        let todo = await Todo.findOne({ _id: req.params.todoId });
        if (!todo) return res.status(401).json({ status: false, message: 'todo not found' });
        else if (todo._id) {
            return res.status(200).json({ status: true, data: todo });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}