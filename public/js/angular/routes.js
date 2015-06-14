var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index',
            controller: 'indexController'
        })
        .when('/faq', {
            templateUrl: 'faq',
            controller: 'faqController'
        })
        .when('/contactMe', {
            templateUrl: 'contactMe',
            controller: 'contactMeController'
        })
        .when('/photos/:page', {
            templateUrl: 'photos',
            controller: 'photosController'
        })
        .otherwise({
            redirectTo: 'index'
        });
}]);

