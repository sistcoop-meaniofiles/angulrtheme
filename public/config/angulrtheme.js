'use strict';

/* jshint -W098 */

angular.module('mean.angulrtheme').config(function(sgIso3166Provider) {
  sgIso3166Provider.restUrl = 'http://localhost:8080/iso3166/rest';
});

angular.module('mean.angulrtheme').config(function(sgIso4217Provider) {
  sgIso4217Provider.restUrl = 'http://localhost:8080/iso4217/rest';
});

angular.module('mean.angulrtheme').config(function(sgUbigeoProvider) {
  sgUbigeoProvider.restUrl = 'http://localhost:8080/ubigeo/rest';
});

angular.module('mean.angulrtheme').config(function(sgProductoProvider) {
  sgProductoProvider.restUrl = 'http://localhost:8080/producto/rest';
});

angular.module('mean.angulrtheme').config(function(sgPersonaProvider) {
  sgPersonaProvider.restUrl = 'http://localhost:8080/persona/rest';
});

angular.module('mean.angulrtheme').config(function(sgRrhhProvider) {
  sgRrhhProvider.restUrl = 'http://localhost:8080/rrhh/rest';
});

angular.module('mean.angulrtheme').run(function(editableOptions, editableThemes) {
  editableThemes.bs3.inputClass = 'input-sm form-control';
  editableThemes.bs3.buttonsClass = 'btn-sm';
  editableOptions.theme = 'bs3';
});