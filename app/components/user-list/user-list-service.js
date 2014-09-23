'use strict';

angular.module('app').service('userList', 
	['$http', 'env', 
	function($http, env){

		console.log('userList service added to app');

		return{
			get: function(onSuccess, onError){
				$http.get(env.SERVER_URL+'/getallusers')
				.success(onSuccess)
				.error(onError);
			}
		};
}]);