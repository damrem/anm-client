'use strict';

angular.module('app')

.controller('HeaderController', ['$scope', '$rootScope',
	function ($scope, $rootScope) {
		
		$rootScope.$on('$routeChangeSuccess', function(event, current){
			console.log('$routeChangeSuccess', current.originalPath);
			var elt;
			switch(current.originalPath){
				case '/':elt='list';break;
				case '/list':elt='list';break;
				case '/add':elt='add';break;
				case '/about':elt='about';break;
			}
			angular.element('#list').removeClass('active');
			angular.element('#add').removeClass('active');
			angular.element('#about').removeClass('active');
			angular.element('#github').removeClass('active');
			angular.element('#' + elt).addClass('active');
		});

	}]);
