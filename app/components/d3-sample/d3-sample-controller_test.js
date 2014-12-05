'use strict';

describe('userListController', function(){

	var scope, userList, createController;

	var mockData = [
		{
			username: 'a',
			email: 'a@a',
			password: 'a'
		},
		{
			username: 'b',
			email: 'b@b',
			password: 'b'
		},
		{
			username: 'c',
			email: 'c@c',
			password: 'c'
		}
	];

	beforeEach(module('app'));

	//	what a mock for such a small controller!
	//	see http://angular-tips.com/blog/2014/06/introduction-to-unit-test-controllers/ for mocking a POST
	beforeEach(function() {
		var mockUserList = {};
		module('app', function($provide) {
			$provide.value('userList', mockUserList);
		});

		inject(function($q) {
			mockUserList.data = [];
			for(var i in mockData){
				mockUserList.data.push(mockData[i]);
			}

			mockUserList.get = function() {
				var defer = $q.defer();

				defer.resolve(this.data);

				return defer.promise;
			};
		});
	});

	beforeEach(inject(function($rootScope, $controller, _userList_){
		
		console.log($controller);
		scope = $rootScope.$new();
		userList = _userList_;

		createController = function(){
			return $controller('userListController', {'$scope':$rootScope, 'userList':userList});
		};
	}));

	it('should bind the data to the page', function(){
		createController();

		//scope.list();	//already called by the controller itself
		scope.$digest();	//necessary to resolve promises, no data before
		
		console.log('scope.users= '+scope.users);
		
		expect(scope.users).toEqual(mockData);
	});
});