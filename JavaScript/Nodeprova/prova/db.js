var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/prova');

var userSchema = new mongoose.Schema({
    cidade: String,
    temp: String
}, { collection: 'prova' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }