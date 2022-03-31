const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: 'new'
    },
}, { versionKey: false, timestamps: true });

const Todo = mongoose.model('todo', schema);
module.exports = Todo;