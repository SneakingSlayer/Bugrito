const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        min: 6
    },
    lastName:{
        type: String,
        required: true,
        min: 6
    },

    birthdate:{
        type: Date,
        required: true
    },

    email:{
        type: String,
        required: true,
        min: 6
    },
    password:{
        type: String,
        required: true,
        min: 6
    }

})

module.exports = mongoose.model('User', userSchema)
