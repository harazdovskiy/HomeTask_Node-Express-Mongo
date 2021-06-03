const express = require('express')
const mongoose = require('mongoose')

const PORT = 3000
const app = express()
app.use(express.json())

const todos = require('./router/todos')
app.use('/todos', todos)

// Try to use https://www.npmjs.com/package/dotenv and load path to mongo as an environment var
mongoose.connect('mongodb://localhost:27017/HomeTask', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


