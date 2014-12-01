npm prepublish (must have admin access)
npm start

![travis build](https://travis-ci.org/damrem/anm-client.svg)

This is the client side of a personal experiment using [AngularJS](https://angularjs.org/), [Node.js](http://nodejs.org/) & [MongoDB](http://www.mongodb.org/). It has no functional interest.

It is a single page-webapp developed with [AngularJS](https://angularjs.org/) to discover the ecosystem, the tools & the best-practices around this tech:
* encapsulate features into components, themselves being cut into views, controllers, directives, filters
* unit test and automate as much as possible

[Travis CI](https://travis-ci.org/damrem/anm-client) installs, builds and tests the project on each [Github](https://github.com/damrem/anm-client) push, then deploys it on [Divshot](https://divshot.com/) depending on the branch:
* any branch goes to [developement](http://development.anm-client.divshot.io/)
* `master`goes to [staging](http://staging.anm-client.divshot.io/)
* nothing goes automatically to [production](http://anm-client.divshot.io/): I willingly want to keep this step manual.
 
Each of these environments calls a REST API on their respective [serverside app](https://github.com/damrem/anm-server) deployment:
* [client development env](http://development.anm-client.divshot.io/) -> [server development env](http://anm-server-dev.herokuapp.com/)
* [client staging env](http://staging.anm-client.divshot.io/) -> [server staging env](http://anm-server-stg.herokuapp.com/)
* [client production env](http://anm-client.divshot.io/) -> [server production env](http://anm-server.herokuapp.com/)
 
Other tools involved:
* [Yeoman Angular](https://github.com/yeoman/generator-angular);  I modified the structure a bit after those [Google recommandations](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1)
* [Grunt](http://gruntjs.com/)
* [Karma](https://github.com/karma-runner/karma)/[Jasmine](http://jasmine.github.io/)
* [Divshot CLI](https://www.npmjs.org/package/divshot-cli)
* ...

