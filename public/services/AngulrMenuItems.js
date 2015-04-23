'use strict';

angular.module('mean.angulrtheme').factory('$menuItemsAngulr', [
    function() {
        var menu = {
            menuItems: [],
            setMenuItems: function(menuItems){
                menu.menuItems = menuItems;
            }
        };

        return menu;
    }
]);
