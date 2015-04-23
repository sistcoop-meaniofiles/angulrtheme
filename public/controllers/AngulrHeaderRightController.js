'use strict';

/* jshint -W098 */
angular.module('mean.angulrtheme').controller('AngulrHeaderRightController', ['$scope', 'Auth',
  function($scope, Auth) {

    $scope.userProfile = {
      username: Auth.authz.idTokenParsed.preferred_username
    };

  }
]);