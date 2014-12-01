'use strict';

angular.module('app')

.controller('HeaderController', ['$scope', '$rootScope',
	function ($scope, $rootScope) {
		
		var eltNames = ['d3sample', 'list', 'add', 'about', 'github'];
		var defaultEltName = 'd3sample';

		$rootScope.$on('$routeChangeSuccess', function(event, current){
			console.log('$routeChangeSuccess', current.originalPath);
			
			var eltToActivateName = current.originalPath.substring(1);

			if(eltToActivateName==='')	eltToActivateName = defaultEltName;

			for(var i in eltNames){
				var eltName = eltNames[i];
				console.log("eltName="+eltName);
				angular.element('#'+eltName).removeClass('active');
			}
			/*
			angular.element('#list').removeClass('active');
			angular.element('#add').removeClass('active');
			angular.element('#about').removeClass('active');
			angular.element('#github').removeClass('active');
			angular.element('#d3sample').removeClass('active');
			*/
			angular.element('#' + eltToActivateName).addClass('active');
		});

	}]);
