module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('base', {title: 'Express'});
    });
    app.get('/test', function(req, res) {
        console.log(111111);
        res.render('test', {title: 'Express'});
    });
};