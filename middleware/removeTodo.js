const TodoModel = require('../models/todoList')

module.exports = async (req, res, next) => {
    try {
        const todoId = req.params.id
        const presentId = await TodoModel.findById(todoId).exec()
        if (presentId) {
            req.data = await TodoModel.deleteOne({ "_id": todoId})
        } else {
            return res.send('There is no todo with this id!')
        }
    } catch (e) {
        res.status(500).json(e)
    }
    next()
}