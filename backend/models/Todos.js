const mongoose = require("mongoose")
const TodosSchema = new mongoose.Schema({
    content: String,
    author: String
})

module.exports = mongoose.model('todo', TodosSchema)