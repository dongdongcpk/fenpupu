var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index',
//            controller: 'indexController'
        })
        .when('/faq', {
            templateUrl: 'faq',
            controller: 'faqController'
        })
        .otherwise({
            redirectTo: 'index'
        });
}]);

