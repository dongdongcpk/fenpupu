
app.controller('boardController', ['$scope',
    function($scope) {
        var CM = new CommentManager($('#my-comment-stage'));
        CM.init();
        CM.start();
        window.CM = CM;
    }]);