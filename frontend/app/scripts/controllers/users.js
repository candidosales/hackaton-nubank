'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('UsersCtrl', function ($scope, $location, User) {

    $scope.users = User.query();

    $scope.goProfile = function(){
        $location.path('/user/show');
    }

  });
