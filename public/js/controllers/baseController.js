
app.controller('baseController', ['$scope', function($scope) {
    $scope.nav = {
        name: '粉扑扑 (｡・`ω´･)',
        more: '更多扑扑',
        log: '开发日志',
        contact: '联系我',
        signUp: '注册',
        signIn: '登录'
    };
    $scope.tips = function() {
        alert(' (＞﹏＜)  开发中，下一版放出哟');
    };
}]);