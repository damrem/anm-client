'use strict';

var app = angular.module('app', [
	'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-gestures',
    'nvd3ChartDirectives'
	]);


app
.config(['$httpProvider', function($httpProvider){
	$httpProvider.defaults.useXDomain=true;
	delete $httpProvider.defaults.headers.common['X-Requested-Width'];
}])


.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/d3sample/d3sample-view.html'
            })
            .when('/list', {
                templateUrl: 'components/user-list/user-list-view.html'
            })
            .when('/add', { 
                templateUrl: 'components/add-user/add-user-view.html'
            })
            .when('/about', { 
                templateUrl: 'components/about/about-view.html'
            })
            .when('/d3sample', {
                templateUrl: 'components/d3sample/d3sample-view.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

;
