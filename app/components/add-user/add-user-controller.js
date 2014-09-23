'use strict';

angular.module('app')

.controller('addUserController', 
	['$scope', 'addUser', 
	function($scope, addUser) {

	console.log('addUserController added to app!');
	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {

		console.log('submitForm('+isValid);

		// check to make sure the form is completely valid
		if (!isValid) {
			return;
		}

		//console.log(this);	//'this' is the form, ie the html element on which the controller is put

		var formData={
			'username':this.username,
			'password':this.password,
			'email':this.email
		};
		
		this.username='';
		this.password='';
		this.email='';
		
		function onSuccess(response){
			console.log('Success.');
			$scope.codeStatus=response;
			console.log($scope.codeStatus);
		}

		function onError(response){
			console.log('Error.');
			$scope.codeStatus=response;
			console.log($scope.codeStatus);
		}

		addUser.post(formData, onSuccess, onError);

		//$scope.list();
		return false;
	};

}]);
