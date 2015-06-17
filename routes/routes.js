var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var quickMsg = require('../db/models/quickMsg');
var QuickMsg = mongoose.model('QuickMsg');
var videoConf = require('../config/videosConf');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('base');
    });
    app.get('/index', function(req, res) {
        res.render('index');
    });
    app.get('/faq', function(req, res) {
        res.render('faq');
    });
    app.get('/faqContent', function(req, res) {
        res.send('有什么问题请尽管提问吧 ヾ(o◕∀◕)ﾉ');
    });
    app.get('/contactMe', function(req, res) {
        res.render('contactMe');
    });
    app.get('/photos', function(req, res) {
        res.render('photos');
    });
    app.post('/sendQuickMsg', function(req, res) {
//        if(req.body.name && req.body.email && req.body.message) {
//            if(req.body.name.length <= 20 && req.body.email.length <= 40 && req.body.message.length <= 140) {
//                req.body.date = new Date().toLocaleString();
//                var quickMsg = new QuickMsg(req.body);
//                quickMsg.save();
//            }
//        }
        res.send('ok');
    });
    app.get('/videos', function(req, res) {
        res.render('videos');
    });
    app.get('/videoDetail', function(req, res) {
        res.render('videoDetail');
    });
    app.get('/getPhotos/:page', function(req, res) {
        var page = parseInt(req.params.page, 10);
        var files = fs.readdirSync(path.join(__dirname, '../public/img/photos'));
        var len = files.length;
        var maxPage = Math.ceil(len / 8);
        page = Math.min(page, maxPage);
        var start = (page - 1) * 8;
        var end = page * 8;
        files = files.slice(start, end);
        var names = [];
        for(var i = 0; i < files.length; i++) {
            var name = path.join('img/photos', files[i]);
            names.push(name);
        }
        res.send(names);
    });
    app.get('/getVideos/:page', function(req, res) {
        var page = parseInt(req.params.page, 10);
        var files = fs.readdirSync(path.join(__dirname, '../public/img/covers'));
        var len = files.length;
        var maxPage = Math.ceil(len / 8);
        page = Math.min(page, maxPage);
        var start = (page - 1) * 8;
        var end = page * 8;
        files = files.slice(start, end);
        var videos = [];
        for(var i = 0; i < files.length; i++) {
            var video = path.join('img/covers', files[i]);
            var obj = videoConf[files[i]];
            obj.video = video;
            videos.push(obj);
        }
        res.send(videos);
    });
    app.get('/getVideo/:id', function(req, res) {
        res.send('aid=2397392&page=1');
    });
};