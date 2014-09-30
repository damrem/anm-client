'use strict';

/**
 * @ngdoc directive
 * @name anm.client.directive:anmUser
 * @description
 * # anmUser
 */
angular.module('app')
  .directive('anmUser', function () {
  	//console.log('anm-user-directive');
    return {
      templateUrl: 'components/user/user-partial.html',
      restrict: 'A',
      scope: {
      	user:'=anmUser'
      }
    };
  });
