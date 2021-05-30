const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joigoose = require('joigoose')(mongoose)
const Joi = require('joi')

const joiSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().min(2).required(),
    completed: Joi.boolean().required()
})

const TodoSchema = new Schema(Joigoose.convert(joiSchema))

module.exports = mongoose.model('Todo', TodoSchema)
