'use strict';

angular.module('app')

.controller('userListController', 
	['$scope', 'userList', 
	function($scope, userList) {

	console.log('userListController added to app');
	
	$scope.list = function(){
		
		console.log('userListController.list()');
		
		userList.get(
		function(data){
			$scope.users = data;
		},
		function(error){
			console.log(error);
		});
	};

	$scope.list();

}]);
