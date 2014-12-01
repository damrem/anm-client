'use strict';

angular.module('app')

.controller('d3sampleController', 
	['$scope', 'fakeService', 
	function($scope, fakeService) {

	console.log('d3sampleController added; $scope='+$scope+'; fakeService='+fakeService);

	console.log("fakeService.get="+fakeService.get);
	console.log("fakeService.get()="+fakeService.get());
	console.log("fakeService.get().then="+fakeService.get().then);
	console.log("fakeService.get().then()="+fakeService.get().then());
	
	$scope.list = function(){
		
		console.log('userListController.list()');
		
		fakeService.get().then(function(data)
		{
			$scope.users = data;
			console.log(data);
		});
	};

	$scope.list();

}]);
