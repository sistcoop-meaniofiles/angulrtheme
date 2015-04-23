'use strict';

/* jshint -W098 */
angular.module('mean.angulrtheme').controller('AngulrSidebarController', ['$rootScope', '$menuItemsAngulr',
    function($rootScope, $menuItemsAngulr) {

        $rootScope.$menuItemsAngulr = $menuItemsAngulr.menuItems;

    }
]);