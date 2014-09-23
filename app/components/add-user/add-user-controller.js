'use strict';

angular.module('app')

.controller('addUserController', ['$scope', '$http', '$templateCache', 'env', function($scope, $http, $templateCache, env) {

	console.log('addUserController added to app!');
	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {

		console.log('submitForm('+isValid);

		// check to make sure the form is completely valid
		if (!isValid) {
			return;
		}

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
			method: 'POST',
			url: env.SERVER_URL+'/insertuser',
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
		//$scope.list();
		return false;
	};

}]);
