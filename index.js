const express = require('express')
const mongoose = require('mongoose')

const PORT = 3000
const app = express()
app.use(express.json())

const todos = require('./router/todos')
app.use('/todos', todos)

mongoose.connect('mongodb://localhost:27017/HomeTask', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


