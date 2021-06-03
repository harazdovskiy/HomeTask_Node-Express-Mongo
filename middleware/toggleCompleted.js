const TodoModel = require('../models/todoList')

// Joi schema validator should handle req.params.id, because user can pass id in wrong format and he would not receive proper http status and response

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
