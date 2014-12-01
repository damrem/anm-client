'use strict';

angular.module('app').service('fakeService', 
	['$http', 'env', 
	function($http, env){

		console.log('fakeService added to app');

		return {
			get: function()
			{
				return $http.get('http://localhost:9000')
				.then(function(result) {
					return {a: 1, b:2, c:3};
				});
			}
		};
}]);