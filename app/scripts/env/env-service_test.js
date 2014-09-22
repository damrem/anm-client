'use strict';

describe('env', function() {
    
    var env;
    
    beforeEach(module('app'));

    beforeEach(inject(function (_env_) {
        env = _env_;
    }));
    

    it('should be an defined object.', function() {
    	expect(env).not.toBe(null);
    });

    it('should have a SERVER_URL property containing an URL.', function() {
    	expect(env.SERVER_URL.indexOf('http')>=0).toBe(true);
 	});
 });