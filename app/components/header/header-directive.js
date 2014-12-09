'use strict';


angular.module('app')




.constant('routeDefs', [
	{id: 'ui', title: 'UI Guideline', templateUrl: 'pages/ui-guideline/index.html'},
	{id: 'svg', title: 'SVG', templateUrl: 'pages/svg-sample/svg-sample.html'},
	{id: 'd3', title: 'D3', templateUrl: 'pages/d3-sample/d3-sample.html'},
	{id: 'misc', title: 'CSS', templateUrl: 'pages/css/index.html'}
])




//	the routes
.config(function ($routeProvider, routeDefs) {

	console.log('Setting routes.');

	for(var i in routeDefs){

		var routeDef = routeDefs[i];
		console.log(i+' -> '+routeDef.id+' -> '+routeDef.templateUrl);
		if(i===0){
			$routeProvider.when('/', {templateUrl: routeDef.templateUrl});
		}
		$routeProvider.when('/'+routeDef.id, {templateUrl: routeDef.templateUrl});

	} 
	$routeProvider.otherwise({redirectTo:'/'});

})




.directive('pgHeader', ['$rootScope', '$location', 'routeDefs',
	function ($rootScope, $location, routeDefs) {
  	console.log('pg-header directive created.');

  	console.log('$rootScope='+$rootScope);

  	return {
		
		templateUrl: 'components/header/header-partial.html',
		
		restrict: 'E',

		controller: function($scope, routeDefs)
		{
			console.log('HeaderController created.')
			$scope.routeDefs = routeDefs;
		},

     	link: function(scope, element, attrs){
	      	console.log('pg-header directive linked.');

	      	$rootScope.$on('$routeChangeSuccess', function(event, current){
			
				var eltToActivateName = $location.path() === '/' ? routeDefs[0].id : $location.path().substring(1);
				console.log('eltToActivateName='+eltToActivateName);

				for(var i in routeDefs){
					angular.element('#'+routeDefs[i].id).removeClass('active');
				}

				angular.element('#' + eltToActivateName).addClass('active');
			});
      	}
    };
  	}])

;