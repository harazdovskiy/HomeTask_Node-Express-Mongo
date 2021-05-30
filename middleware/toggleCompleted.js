const TodoModel = require('../models/todoList')

module.exports = async (req, res, next) => {
    try {
        const todoId = req.params.id
        const presentId = await TodoModel.findById(todoId).exec()
        if (presentId) {
            req.data = await TodoModel.findById(todoId, (err, issue) => {
                issue.completed = !issue.completed
                issue.save()
            })
        }
    } catch (e) {
        return res.send('There is no todo with this id!')
    }
    next()
}