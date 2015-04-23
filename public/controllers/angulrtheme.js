'use strict';

/* jshint -W098 */
angular.module('mean.angulrtheme').controller('AngulrthemeController', ['$scope', 'Global', 'Angulrtheme',
  function($scope, Global, Angulrtheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'angulrtheme'
    };
  }
]);