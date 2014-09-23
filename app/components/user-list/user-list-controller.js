'use strict';

angular.module('app')

.controller('userListController', ['$scope', '$http', '$templateCache', 'env', function($scope, $http, $templateCache, env) {

	console.log('userListController added to app');
	
	$scope.list = function(){
		
		console.log('userListController.list()');
		
		$http.get(env.SERVER_URL+'/getallusers')
		.success(function(data){
			$scope.users=data;
		})
		.error(function(response){
			console.log(response);
		});
	};

	$scope.list();

}]);
