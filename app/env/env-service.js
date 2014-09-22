'use strict';

angular.module('app')
.factory('env', function() {
	if(window.__env){
		return window.__env;
	}
	else{
		return{
			SERVER_URL: 'http://localhost:5000'
		};
	}
});