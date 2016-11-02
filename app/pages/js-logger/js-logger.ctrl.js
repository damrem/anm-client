'use strict';

angular.module('app')

.controller('JsLoggerCtrl', [

	'$scope', 'Logger',

	function($scope, Logger){

		console.warn(window);

		Logger.useDefaults();
		var logger = Logger.get('js-logger.ctrl.js');
		logger.setLevel(Logger.ALL);

		logger.warn('plop');

	}

]);