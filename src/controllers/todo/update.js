const Todo = require("../../models/Todo");

module.exports = update = async(req, res) => {
    try {
        let todo = await Todo.exists({ _id: req.params.todoId });
        if (!todo) {
            return res.status(400).json({ status: false, message: 'todo not found' });
        }
        let updatedTodo = {};
        req.body.title && (updatedTodo.title = req.body.title);
        req.body.description && (updatedTodo.description = req.body.description);
        if(req.body.status && ((req.body.status === 'completed') || (req.body.status === 'canceled'))) {
            updatedTodo.status = req.body.status;
        }
        else{
            return res.status(400).json({ status: false, message: "invalid status" });
        }

        let response = await Todo.updateOne({ _id: req.params.todoId }, { $set: updatedTodo }, { upsert: true });
        if (response.acknowledged) {
            return res.status(200).json({ status: true, message: "successfully updated" });
        }
        else {
            return res.status(400).json({ status: false, message: "update failed" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}
