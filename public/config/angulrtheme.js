'use strict';

/* jshint -W098 */
angular.module('mean.angulrtheme').run(function(editableOptions, editableThemes) {
  editableThemes.bs3.inputClass = 'input-sm form-control';
  editableThemes.bs3.buttonsClass = 'btn-sm';
  editableOptions.theme = 'bs3';
});