'use strict';

/* jshint -W098 */
angular.module('mean.angulrtheme').controller('AngulrSidebarController', ['$scope', '$menuItemsAngulr',
  function($scope, $menuItemsAngulr) {

   // var updateMenuItems = function(){
      $scope.$menuItemsAngulr = $menuItemsAngulr.menuItems;
   // };

  }
]);