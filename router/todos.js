const express = require('express')
const router = express.Router()

const getTodo = require('../middleware/getTodo')
const addTodo = require('../middleware/addTodo')
const removeTodo = require('../middleware/removeTodo')
const toggleCompleted = require('../middleware/toggleCompleted')

// Router should consists of middlewares that validate your request and controller that accepts the data and uses service as a business logic
// another good example is here https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way
router.get('/', 
    getTodo,
    (req, res) => {
        res.send(req.data)
})

router.post('/',
    addTodo,
    (req, res) => {
        res.send(req.data)
})

router.delete('/:id', 
    removeTodo,
    (req, res) => {
        res.send(req.data)
})

router.patch('/:id', 
    toggleCompleted,
    (req, res) => {
        res.send(req.data)
})

module.exports = router
