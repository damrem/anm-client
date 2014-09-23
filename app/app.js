'use strict';

var app = angular.module('app', [
	'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-gestures'
	]);


app
.config(['$httpProvider', function($httpProvider){
	$httpProvider.defaults.useXDomain=true;
	delete $httpProvider.defaults.headers.common['X-Requested-Width'];
}])


.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/user-list/user-list-view.html'
            })
            .when('/list', {
                templateUrl: 'components/user-list/user-list-view.html'
            })
            .when('/add', { 
                templateUrl: 'components/add-user/add-user-view.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

;

function UserListCtrl($scope, $http, $templateCache, env){

	var method='POST';

	//TODO the url must be retrieved from env
	console.log('env.SERVER_URL= '+env.SERVER_URL);
	var inserturl = env.SERVER_URL+'/insertuser';
	
	$scope.codeStatus='';
	
	$scope.save=function(){
		console.log('save');
		var formData={
			'username':this.username,
			'password':this.password,
			'email':this.email
		};
		this.username='';
		this.password='';
		this.email='';

		var jdata='mydata='+JSON.stringify(formData);

		$http({
			method: method,
			url: inserturl,
			data: jdata,
			headers: {
				'Content-Type':'application/x-www-form-urlencoded'
			},
			cache: $templateCache
		}).
		success(function(response){
			console.log('Success.');
			$scope.codeStatus=response;
			console.log($scope.codeStatus);
		}).
		error(function(response){
			console.log('Error.');
			$scope.codeStatus=response;
			console.log($scope.codeStatus);
		});
		$scope.list();
		return false;
	};

	$scope.list = function(){
		
		console.log('list');
		
		console.log('env.SERVER_URL= '+env.SERVER_URL);
		//TODO the url must be retrieved from env
		var url = env.SERVER_URL+'/getallusers';
		console.log('url='+url);

		$http.get(url)
		.success(function(data){
			$scope.users=data;
		})
		.error(function(response){
			console.log(response);
		});
	};

	$scope.list();
}

app.controller('UserListCtrl', ['$scope', '$http', '$templateCache', 'env', UserListCtrl]);
