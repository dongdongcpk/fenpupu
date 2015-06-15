var mongoose = require('mongoose');
var quickMsg = require('../db/models/quickMsg');
var QuickMsg = mongoose.model('QuickMsg');

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
        console.log(req.body);
        var data = {
            name: '',
            email: '',
            message: '',
            date: ''
        };
        data.name = req.body.name;
        data.email = req.body.email;
        data.message = req.body.message;
        data.date = 'today';
        var quickMsg = new QuickMsg(data);
        quickMsg.save();
        res.send('ok');
    });
};