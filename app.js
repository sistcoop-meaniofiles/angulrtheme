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

  /*
   * Css Dependencies*/
  Angulrtheme.aggregateAsset('css', 'angulrtheme.css');
  Angulrtheme.aggregateAsset('css', '../lib/angulr/dist/css/app.min.css');

  /*
  * Dependencies*/
  //angular-messages
  Angulrtheme.aggregateAsset('js', '../lib/angular-messages/angular-messages.js');
  //angular-sanitize
  Angulrtheme.aggregateAsset('js', '../lib/angular-sanitize/angular-sanitize.js');
  //angular-animate
  Angulrtheme.aggregateAsset('js', '../lib/angular-animate/angular-animate.js');
  //angular-ui-grid
  Angulrtheme.aggregateAsset('js', '../lib/angular-ui-grid/ui-grid.js');
  Angulrtheme.aggregateAsset('css', '../lib/angular-ui-grid/ui-grid.css');
  //angular-ui-select
  Angulrtheme.aggregateAsset('js', '../lib/angular-ui-select/dist/select.js');
  Angulrtheme.aggregateAsset('css', '../lib/angular-ui-select/dist/select.css');
  //angular-ui-select-utils
  Angulrtheme.aggregateAsset('js', '../lib/angular-ui-select-utils/dist/select.utils.js');
  //angular-ui-notification
  Angulrtheme.aggregateAsset('js', '../lib/angular-ui-notification/dist/angular-ui-notification.min.js');
  Angulrtheme.aggregateAsset('css', '../lib/angular-ui-notification/dist/angular-ui-notification.min.css');
  //angular-ui-utils
  Angulrtheme.aggregateAsset('js', '../lib/angular-ui-utils/ui-utils.js');
  //angular-input-masks
  Angulrtheme.aggregateAsset('js', '../lib/angular-input-masks/angular-input-masks.js');
  //angular-ladda
  Angulrtheme.aggregateAsset('css', '../lib/ladda/dist/ladda-themeless.min.css');
  Angulrtheme.aggregateAsset('js', '../lib/ladda/dist/spin.min.js');
  Angulrtheme.aggregateAsset('js', '../lib/ladda/dist/ladda.min.js');
  Angulrtheme.aggregateAsset('js', '../lib/angular-ladda/dist/angular-ladda.min.js');
  //angular-toastr
  Angulrtheme.aggregateAsset('css', '../lib/angular-toastr/dist/angular-toastr.css');
  Angulrtheme.aggregateAsset('js', '../lib/angular-toastr/dist/angular-toastr.tpls.js');
  //angular-xeditable
  Angulrtheme.aggregateAsset('css', '../lib/angular-xeditable/dist/css/xeditable.css');
  Angulrtheme.aggregateAsset('js', '../lib/angular-xeditable/dist/js/xeditable.js');
  //ng-autofocus
  Angulrtheme.aggregateAsset('js', '../lib/ng-autofocus/dist/ng-autofocus.js');
  //restangular
  Angulrtheme.aggregateAsset('js', '../lib/underscore/underscore.js');
  Angulrtheme.aggregateAsset('js', '../lib/restangular/dist/restangular.js');
  //sg-iso3166
  Angulrtheme.aggregateAsset('js', '../lib/sg-iso3166/dist/sg-iso3166.js');
  //sg-iso4217
  Angulrtheme.aggregateAsset('js', '../lib/sg-iso4217/dist/sg-iso4217.js');
  //sg-ubigeo
  Angulrtheme.aggregateAsset('js', '../lib/sg-ubigeo/dist/sg-ubigeo.js');
  //sg-persona
  Angulrtheme.aggregateAsset('js', '../lib/sg-persona/dist/sg-persona.js');
  //sg-producto
  Angulrtheme.aggregateAsset('js', '../lib/sg-producto/dist/sg-producto.js');
  //sg-rrhh
  Angulrtheme.aggregateAsset('js', '../lib/sg-rrhh/dist/sg-rrhh.js');
  //sg-utils
  Angulrtheme.aggregateAsset('js', '../lib/sg-utils/dist/sg-utils.js');

  Angulrtheme.angularDependencies([
    'ngMessages',
    'ngSanitize',
    'ngAnimate',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.select',
    'ui.select.utils',
    'ui-notification',
    'ui.utils',
    'ui.utils.masks',
      //ladda dependencie
    'toastr',
    'xeditable',
    'ng-autofocus',
    'restangular',
    'sg-iso3166',
    'sg-iso4217',
    'sg-ubigeo',
    'sg-persona',
    'sg-producto',
    'sg-rrhh',
    'sg-utils'
  ]);

  return Angulrtheme;
});
