'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MenuCtrl', function ($scope, User) {
    console.log(User.get());
    if (User.get() == {})
      $scope.show = true;
    else
      $scope.show = false;

    $scope.showLogin = function () {
      return $scope.show;
    }
  });
