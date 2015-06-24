var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var boardSchema = new Schema({
    // 弹幕类型
    mode: {
        type: Number,
        default: 1
    },
    text: String,
    // 弹幕大小
    size: {
        type: Number,
        default: 25
    },
    // 弹幕颜色
    color: {
        type: Number,
        default: 0x000000
    },
    date: Date,
    author: String
});

var Board = mongoose.model('Board', boardSchema);