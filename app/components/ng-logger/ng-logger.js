'use strict';

var ngLogger = angular.module('ng-logger', []);

ngLogger.provider('Logger', function LoggerProvider(){

	var logger = window.Logger;
	
	var 
		_level = 'OFF', 
		_appenders = [], 
		_dateFormat = 'yyyy-MM-dd hh:mm:ss';

	function evalDotToBracket(expression){
		var path = expression.split('.');
		var result = window;
		for(var i in path){
			result = result[path[i]];
			if(angular.isUndefined(result)){
				return result;
			}
		}
		return result;
	}

	this.$get = [function(){

		/*var _getLogger = log4js.getLogger;
		
		log4js.getLogger = function(categoryName){
			
			var logger = _getLogger(categoryName);
		
			//logger.setLevel(log4js.Level[ENV.logging.level || 'OFF']);
			logger.setLevel(log4js.Level[_level]);

			//logger.setDateFormat(ENV.logging.dateFormat || 'yyyy-MM-dd hh:mm:ss');
			logger.setDateFormat(_dateFormat);

			for(var i in _appenders){
				logger.addAppender(_appenders[i]);
			}

			return logger;
		};*/
		
		return logger;
	}];


/*
	this.setLevel = function(level){
		_level = level;
	};

	this.setDateFormat = function(dateFormat){
		_dateFormat = dateFormat;
	};

	this.configureAppender = function(appenderConf){
		
		if(!appenderConf.type){
			throw new Error('You must define a type in the appender conf: '+JSON.stringify(appenderConf));
		}	
		var AppenderType = evalDotToBracket(appenderConf.type);
		if(!AppenderType){
			throw new Error('"'+appenderConf.type+'" is not a valid Appender type.');
		}	
		var appender = new AppenderType();

		var layout;
		
		if(appenderConf.layout){
		
			if(!appenderConf.layout.type){
				layout = new log4js.PatternLayout(appenderConf.layout.conversionPattern || log4js.DEFAULT_CONVERSION_PATTERN);
			}
			else{
				var LayoutType = evalDotToBracket(appenderConf.layout.type);
				if(!LayoutType){
					throw new Error('"'+appenderConf.layout.type+'" is not a valid Layout type.');
				}	
				layout = new LayoutType(appenderConf.layout.conversionPattern);
			}

			appender.setLayout(layout);
		}

		_appenders.push(appender);
		
	};
*/
	
})

//.service('Log4js', window.Log4js)

;