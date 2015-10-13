var app = angular.module('app', ['ngRoute', 'glu']);

app.config(['$routeProvider', function ($routeProvider)
{
    $routeProvider
        .when('/', {templateUrl: '/views/home/home.html',
            controller: HomeCtrl})
        .when('/list', {templateUrl: '/views/list/list.html',
            controller: ListCtrl})
        .when('/offer', {templateUrl: '/views/offer/offer.html',
            controller: OfferCtrl})
        .otherwise({redirectTo: '/'});
}]);

/*app.config(['$locationProvider', function($locationProvider)
{
    $locationProvider.html5Mode(true);
}]);*/