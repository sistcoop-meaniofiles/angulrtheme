'use strict';

angular.module('mean.angulrtheme').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('angulrtheme example page', {
      url: '/angulrtheme/example',
      templateUrl: 'angulrtheme/views/index.html'
    });
  }
]);
