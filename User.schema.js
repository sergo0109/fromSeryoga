const mongoose = require('mongoose')

const User = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    eMail: {type: String, required: true}
})

module.exports = mongoose.model('User', User)