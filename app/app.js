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




;
