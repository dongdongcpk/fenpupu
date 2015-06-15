var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var quickMsgSchema = new Schema({
    name: String,
    email: String,
    message: String,
    date: String
});

var QuickMsg = mongoose.model('QuickMsg', quickMsgSchema);