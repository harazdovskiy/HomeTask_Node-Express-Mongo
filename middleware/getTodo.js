const TodoModel = require('../models/todoList')

module.exports = async (req, res, next) => {
    try {
        const todoList = await TodoModel.find({})
        if (todoList.length < 1) {
            return res.send('Your todolist is empty!')
        } else {
            req.data = todoList
        }
    } catch (e) {
        res.status(500).json(e)
    }
    next()
}