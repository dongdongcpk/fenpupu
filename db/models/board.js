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
        type: String,
        default: '0x000000'
    },
    date: Date,
    author: String
});

boardSchema.statics.getBoardsCount = function(cb) {
    this.find()
        .count()
        .exec(cb);
};

boardSchema.statics.getBoardsByPage = function(page, cb) {
    this.find()
        .sort({_id: -1})
        .skip(6 * (page - 1))
        .limit(6)
        .exec(cb);
};

var Board = mongoose.model('Board', boardSchema);