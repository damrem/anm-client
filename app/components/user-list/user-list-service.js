'use strict';

angular.module('app').service('userList', 
	['$http', 'env', 
	function($http, env){

		console.log('userList service added to app');

		return {
			get: function(){
				return $http.get(env.SERVER_URL+'/getallusers')
				.then(function(result){
					return result.data;
				});
			}
		};
}]);