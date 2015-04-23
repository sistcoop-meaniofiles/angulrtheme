'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Angulrtheme = new Module('angulrtheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Angulrtheme.register(function(app, auth, database) {

  app.set('views', __dirname + '/server/views');

  //We enable routing. By default the Package Object is passed to the routes
  Angulrtheme.routes(app, auth, database);
  
  Angulrtheme.aggregateAsset('css', 'angulrtheme.css');
  Angulrtheme.aggregateAsset('css', '../lib/angulr/dist/css/app.min.css');

  return Angulrtheme;
});
