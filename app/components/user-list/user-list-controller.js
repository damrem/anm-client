'use strict';

angular.module('app')

.controller('userListController', 
	['$scope', 'userList', 
	function($scope, userList) {

	console.log('userListController added; $scope='+$scope+'; userList='+userList);
	
	$scope.list = function(){
		
		console.log('userListController.list()');
		
		userList.get().then(function(data)
		{
			$scope.users = data;
		});
	};

	$scope.list();

}]);
