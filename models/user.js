const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    phone: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    created:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('User', userSchema)