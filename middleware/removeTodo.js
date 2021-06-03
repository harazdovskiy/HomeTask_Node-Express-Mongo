const TodoModel = require('../models/todoList')

// Example of code improvements
module.exports = async (req, res, next) => {
    try {
        
        const {id: todoId} = req.params

        if(!todoId) res.status(400).json({ error: 'Todo id is not provided!' })

        const todo = await TodoModel.deleteOne({_id: todoId})

        if(!todo) {
            //handle error
        }
           //handle success
        
    } catch (e) {
        res.status(500).json(error: e)
    }
    next()
}
