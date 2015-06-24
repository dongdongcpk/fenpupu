var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var quickMsg = require('../db/models/quickMsg');
var QuickMsg = mongoose.model('QuickMsg');
var videosConf = require('../config/videosConf');
var videoDetailConf = require('../config/videoDetailConf');
var logsConf = require('../config/logsConf');
var _ = require('underscore');

var photoFiles = [];
var coverFiles = [];

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('base');
    });
    app.get('/index', function(req, res) {
        res.render('index');
    });
    app.get('/logs', function(req, res) {
        res.render('logs');
    });
    app.get('/getLogs/:page', function(req, res) {
        var page = parseInt(req.params.page, 10);
        var len = logsConf.length;
        var maxPage = Math.ceil(len / 6);
        page = Math.max(page, 1);
        page = Math.min(page, maxPage);
        var start = (page - 1) * 6;
        var end = page * 6;
        var logs = logsConf.slice(start, end);
        res.send(logs);
    });
    app.get('/contactMe', function(req, res) {
        res.render('contactMe');
    });
    app.get('/photos', function(req, res) {
        res.render('photos');
    });
    app.post('/sendQuickMsg', function(req, res) {
        if(req.body.name && req.body.email && req.body.message) {
            if(req.body.name.length <= 20 && req.body.email.length <= 40 && req.body.message.length <= 140) {
                req.body.date = new Date().toLocaleString();
                var quickMsg = new QuickMsg(req.body);
                quickMsg.save();
            }
        }
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
        if(photoFiles.length === 0) {
            photoFiles = _.shuffle(fs.readdirSync(path.join(__dirname, '../public/img/photos')));
        }
        var files = photoFiles;
        var len = files.length;
        var maxPage = Math.ceil(len / 8);
        page = Math.max(page, 1);
        page = Math.min(page, maxPage);
        var start = (page - 1) * 8;
        var end = page * 8;
        files = files.slice(start, end);
        var photos = [];
        for(var i = 0; i < files.length; i++) {
            var photo = path.join('img/photos', files[i]);
            photos.push(photo);
        }
        res.send({photos: photos, maxPage: maxPage});
    });
    app.get('/getVideos/:page', function(req, res) {
        var page = parseInt(req.params.page, 10);
        if(coverFiles.length === 0) {
            coverFiles = fs.readdirSync(path.join(__dirname, '../public/img/covers'));
            coverFiles.sort(sortCovers);
        }
        var files = coverFiles;
        var len = files.length;
        var maxPage = Math.ceil(len / 8);
        page = Math.max(page, 1);
        page = Math.min(page, maxPage);
        var start = (page - 1) * 8;
        var end = page * 8;
        files = files.slice(start, end);
        var videos = [];
        for(var i = 0; i < files.length; i++) {
            var video = path.join('img/covers', files[i]);
            var obj = videosConf[files[i]];
            obj.path = video;
            videos.push(obj);
        }
        res.send(videos);
    });
    app.get('/getVideo/:id', function(req, res) {
        var id = req.params.id;
        var resp = {};
        var key = videoDetailConf[id];
        if(!!key) {
            var conf = videosConf[key];
            resp.title = conf.title;
            resp.desc = conf.desc;
        }
        res.send(resp);
    });
    app.get('/board', function(req, res) {
        res.render('board');
    });
    app.post('/sendBoardMsg', function(req, res) {
        if(req.body.name && req.body.message) {
            if(req.body.name.length <= 20 && req.body.message.length <= 140) {

            }
        }
        res.send('ok');
    });
};

var sortCovers = function(cover1, cover2) {
    id1 = cover1.split('.')[0];
    id2 = cover2.split('.')[0];
    if(id1 > id2) {
        return -1;
    }
    else{
        return 1;
    }
};