'use strict';

angular.module('app').service('addUser', 
	['$http', '$templateCache', 'env', 
	function($http, $templateCache, env){
	return {
		post: function(data, onSuccess, onError){

			var jdata = 'user=' + JSON.stringify(data);

			$http({
				method: 'POST',
				url: env.SERVER_URL+'/insertuser',
				data: jdata,
				headers: {
					'Content-Type':'application/x-www-form-urlencoded'
				},
				cache: $templateCache
			})
			.success(onSuccess)
			.error(onError);
		}
	};
}]);