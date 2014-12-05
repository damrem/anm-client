'use strict';


var routeDefs = [
	{id: 'svg', templateUrl: 'pages/svg-sample/svg-sample.html'},
	{id: 'd3', templateUrl: 'pages/d3-sample/d3-sample.html'}
];


angular.module('app')

//	the 'active' link in the header
.controller('HeaderController', ['$scope', '$rootScope', '$location',
	function ($scope, $rootScope, $location) {
		
		console.log('HeaderController');

		$rootScope.$on('$routeChangeSuccess', function(event, current){
			
			console.log('$routeChangeSuccess');
			console.log(current);
			console.log('path='+$location.path());
			
			
			var eltToActivateName = $location.path() === '/' ? routeDefs[0].id : $location.path().substring(1);
			console.log('eltToActivateName='+eltToActivateName);

			for(var i in routeDefs){
				
				angular.element('#'+routeDefs[i].id).removeClass('active');
			}

			angular.element('#' + eltToActivateName).addClass('active');
		});

	}])

//	the routes
.config(function ($routeProvider) {

	for(var i in routeDefs){

		var routeDef = routeDefs[i];
		console.log(i+' -> '+routeDef.id+' -> '+routeDef.templateUrl);
		if(i===0){
			$routeProvider.when('/', {templateUrl: routeDef.templateUrl});
		}
		$routeProvider.when('/'+routeDef.id, {templateUrl: routeDef.templateUrl});
		

	} 
	$routeProvider.otherwise({redirectTo:'/'});

});
