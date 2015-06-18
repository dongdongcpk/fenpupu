var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index',
            controller: 'indexController'
        })
        .when('/log', {
            templateUrl: 'log',
            controller: 'logController'
        })
        .when('/contactMe', {
            templateUrl: 'contactMe',
            controller: 'contactMeController'
        })
        .when('/photos/:page', {
            templateUrl: 'photos',
            controller: 'photosController'
        })
        .when('/videos/:page', {
            templateUrl: 'videos',
            controller: 'videosController'
        })
        .when('/videoDetail/:id', {
            templateUrl: 'videoDetail',
            controller: 'videoDetailController'
        })
        .otherwise({
            redirectTo: 'index'
        });
}]);

