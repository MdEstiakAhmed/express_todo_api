const Todo = require("../../models/Todo");
const isValidDate = require("../../utils/tool");

module.exports = getAll = async(req, res) => {
    try {
        let find = {username: req.headers.username};

        if(req.query.status){
            let isValidStatus= ['new', 'completed', 'canceled'].includes(req.query.status)
            isValidStatus && (find.status = req.query.status)
        }

        if(req.query.start || req.query.end){
            if(req.query.start && isValidDate(req.query.start)){
                !find.createdAt && (find.createdAt = {});
                find.createdAt.$gte = req.query.start
            }
            if(req.query.end && isValidDate(req.query.end)){
                !find.createdAt && (find.createdAt = {});
                find.createdAt.$lte = req.query.end
            }
        }

        let todo = await Todo.find(find);
        if (!todo) return res.status(401).json({ status: false, message: 'todo not found' });
        else if (todo) {
            return res.status(200).json({ status: true, data: todo });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}