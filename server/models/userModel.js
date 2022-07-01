const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
      }
}, {
    timestamps: true
}) 

module.exports = model('User', userSchema)