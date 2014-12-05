'use strict';

describe('userList', function(){

	var userList, httpBackend, env;

	beforeEach(module('app'));

	beforeEach(inject(function(_userList_, $httpBackend, _env_){
		userList = _userList_;
		httpBackend = $httpBackend;
		env = _env_;
	}));

	afterEach(function() {
	    httpBackend.verifyNoOutstandingExpectation();
	    httpBackend.verifyNoOutstandingRequest();
	  });

	var returnedData = [
		{username:'a', email:'a@a', password:'a'},
		{username:'b', email:'b@b', password:'b'},
		{username:'c', email:'c@c', password:'c'}
	];

	it('should get a JSON formatted user list', function(){
		httpBackend.whenGET(env.SERVER_URL+'/getallusers').respond(returnedData);
		var result;
		userList.get().then(function(response)
		{
			result = response;
		});

		httpBackend.flush();

		expect(result).toEqual(returnedData);
	});

});