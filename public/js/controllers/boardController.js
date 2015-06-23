
app.controller('boardController', ['$scope',
    function($scope) {
        var CM = new CommentManager($('#my-comment-stage').get(0));
        CM.init();
        CM.start();
        window.CM = CM;
    }]);