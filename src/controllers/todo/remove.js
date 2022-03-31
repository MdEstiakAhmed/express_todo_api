const Todo = require("../../models/Todo");

module.exports = remove = async (req, res) => {
    try {
        let todo = await Todo.exists({ _id: req.params.todoId });
        if (!todo) {
            return res.status(400).json({ status: false, message: 'todo not found' });
        }
        
        let response = await Todo.remove({ _id: req.params.todoId });
        if (response.acknowledged) {
            return res.status(200).json({ status: true, message: "successfully deleted" });
        }
        else {
            return res.status(400).json({ status: false, message: "delete failed" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}