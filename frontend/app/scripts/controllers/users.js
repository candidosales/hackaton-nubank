'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('UsersCtrl', function ($scope,User) {

    $scope.users = User.query();

  });
