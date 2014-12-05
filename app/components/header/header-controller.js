'use strict';


var routeDefs = [
	{id: "svg", templateUrl: "pages/svg-sample/svg-sample.html"},
	{id: "d3", templateUrl: "components/d3sample/d3sample-view.html"}
];


angular.module('app')

//	the "active" link in the header
.controller('HeaderController', ['$scope', '$rootScope', '$location',
	function ($scope, $rootScope, $location) {
		
		console.log('HeaderController');
/*
		var eltNames = ['svg', 'd3', 'list', 'add', 'about', 'github'];
		var defaultEltName = eltNames[0];
*/
		$rootScope.$on('$routeChangeStart', function(next, current){
			console.log('$routeChangeStart', next, current);
		});

		$rootScope.$on('$routeChangeError', function(current, previous, rejection){
			console.log('$routeChangeError', current, previous, rejection);
		});

		$rootScope.$on('$routeUpdate', function(what, whatwhat, whatwhatwhat){
			console.log('$routeUpdate', what, whatwhat, whatwhatwhat);
		});

		$rootScope.$on('$routeChangeSuccess', function(event, current, previous){
			console.log("$routeChangeSuccess");
			console.log(current);
			console.log("path="+$location.path());
			
			//console.log("current.$$route.originalPath="+current.$$route.originalPath);
			
			var eltToActivateName = $location.path() == '/' ? routeDefs[0].id : $location.path().substring(1);
			console.log("eltToActivateName="+eltToActivateName);

			//if(eltToActivateName==='')	eltToActivateName = defaultEltName;

			var ids=[];
			for(i in routeDefs){
				ids.push(routeDefs[i].id);
			}

			for(var i in ids){
				var id = ids[i];
				//console.log("eltName="+eltName);
				angular.element('#'+id).removeClass('active');
			}
			angular.element('#' + eltToActivateName).addClass('active');
		});

	}])

//	the routes
.config(function ($routeProvider) {

	//$routeProvider.when('/', {})
	for(var i in routeDefs){

		var routeDef = routeDefs[i];
		console.log(i+" -> "+routeDef.id+" -> "+routeDef.templateUrl);
		if(i==0){
			$routeProvider.when('/', {templateUrl: routeDef.templateUrl});
		}
		$routeProvider.when('/'+routeDef.id, {templateUrl: routeDef.templateUrl});
		

	} 
	$routeProvider.otherwise({redirectTo:'/'});

/*
    $routeProvider
        .when('/', {
            templateUrl: 'components/d3sample/d3sample-view.html'
        })
        .when('/list', {
            templateUrl: 'components/user-list/user-list-view.html'
        })
        .when('/add', { 
            templateUrl: 'components/add-user/add-user-view.html'
        })
        .when('/about', { 
            templateUrl: 'components/about/about-view.html'
        })
        .when('/d3sample', {
            templateUrl: 'components/d3sample/d3sample-view.html'
        })
        .when('/d3', {
            templateUrl: 'components/d3sample/d3sample-view.html'
        })
         .when('/svg', {
            templateUrl: 'pages/svg-sample/svg-sample.html'
        })
        .otherwise({
            redirectTo: '/'
        });
*/
    });
