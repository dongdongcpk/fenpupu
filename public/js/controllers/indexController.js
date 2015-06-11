
angular.module('app', [])
    .controller('indexController', function($scope) {
        $scope.nav = {
            name: '粉扑扑 (｡・`ω´･)',
            video: 'Products and Services',
            about: '关于扑扑',
            faq: 'FAQ',
            contact: '联系我',
            signUp: '注册',
            signIn: '登录'
        };
    });