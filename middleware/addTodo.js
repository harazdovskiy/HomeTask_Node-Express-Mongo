const TodoModel = require('../models/todoList')

// It's better to use Model-Routes-Controllers-Services Directory Structure, and use middlewares only for data validation
// check this example https://sodocumentation.net/node-js/topic/10785/route-controller-service-structure-for-expressjs
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

