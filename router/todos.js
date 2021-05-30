const express = require('express')
const router = express.Router()

const getTodo = require('../middleware/getTodo')
const addTodo = require('../middleware/addTodo')
const removeTodo = require('../middleware/removeTodo')
const toggleCompleted = require('../middleware/toggleCompleted')

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
