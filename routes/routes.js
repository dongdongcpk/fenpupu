module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('base', {title: 'Express'});
    });
    app.get('/index', function(req, res) {
        console.log(111111);
        res.render('index', {title: 'Express'});
    });
    app.get('/faq', function(req, res) {
        res.render('faq', {title: 'Express'});
    });
    app.get('/faqContent', function(req, res) {
        console.log(2222222);
        res.send('有什么问题请尽管提问吧 ヾ(o◕∀◕)ﾉ');
    });
};