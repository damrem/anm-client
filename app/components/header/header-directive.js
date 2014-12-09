'use strict';


angular.module('app')




.constant('ROUTE_DEFS', [
	{id: 'ui', title: 'UI Guideline', templateUrl: 'pages/ui-guideline/index.html'},
	{id: 'svg', title: 'SVG', templateUrl: 'pages/svg-sample/svg-sample.html'},
	{id: 'd3', title: 'D3', templateUrl: 'pages/d3-sample/d3-sample.html'},
	{id: 'misc', title: 'CSS', templateUrl: 'pages/css/index.html'}
])




//	the routes
.config(function ($routeProvider, ROUTE_DEFS) {

	console.log('Setting routes.');

	for(var i in ROUTE_DEFS){

		var routeDef = ROUTE_DEFS[i];
		console.log(i+' -> '+routeDef.id+' -> '+routeDef.templateUrl);
		if(i===0){
			$routeProvider.when('/', {templateUrl: routeDef.templateUrl});
		}
		$routeProvider.when('/'+routeDef.id, {templateUrl: routeDef.templateUrl});

	} 
	$routeProvider.otherwise({redirectTo:'/'});

})




.directive('pgHeader', ['$rootScope', '$location', 'ROUTE_DEFS',
	function ($rootScope, $location, ROUTE_DEFS) {
  	console.log('pg-header directive created.');

  	console.log('$rootScope='+$rootScope);

  	return {
		
		templateUrl: 'components/header/header-partial.html',
		
		restrict: 'E',

		link: function(scope, element, attrs){
	      	console.log('pg-header directive linked.');

	      	console.log('ROUTE_DEFS='+ROUTE_DEFS);
			
			scope.routeDefs = ROUTE_DEFS;


	      	$rootScope.$on('$routeChangeSuccess', function(event, current){
			
				var eltToActivateName = $location.path() === '/' ? ROUTE_DEFS[0].id : $location.path().substring(1);
				console.log('eltToActivateName='+eltToActivateName);

				for(var i in ROUTE_DEFS){
					angular.element('#'+ROUTE_DEFS[i].id).removeClass('active');
				}

				angular.element('#' + eltToActivateName).addClass('active');
			});
      	}
    };
  	}])

;