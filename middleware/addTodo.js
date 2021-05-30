const TodoModel = require('../models/todoList')

module.exports = async (req, res, next) => {
    try {
        req.data = await TodoModel.create(req.body)
    } catch (e) {
        if (e.code === 11000) {
            return res.send('Todo with this name already exists!')
        }
    }
    next()
}

