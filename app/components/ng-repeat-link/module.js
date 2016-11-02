'use strict';
angular.module('ng-repeat-link', [])

.controller('RepeatLinkCtrl', [
	'$scope',
	'$log',
	function(
		$scope, 
		$log
	){
		$scope.items=[];
		for(var i=0;i<10;i++){
			$scope.items.push({value:i});
		}
	}
])

.directive('linkingDirective', [
	'$log',

	function($log){

		$log.log('linking.directive.js');
		
		

		return{
			restrict:'E',
			template:'<div>value={{item.value}}</div>',
			scope:true,
			link:function(/*scope, elt, attrs, ctrl*/){
				$log.log('link');

			}
		};

	}
])

;