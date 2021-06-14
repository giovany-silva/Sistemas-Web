var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trabalho09');

var userSchema = new mongoose.Schema({
    username: String,
    cpf: String
}, { collection: 'usercollection' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }