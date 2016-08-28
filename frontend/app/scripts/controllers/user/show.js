'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:UserShowCtrl
 * @description
 * # UserShowCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('UserShowCtrl', function ($scope, User) {
      console.log(User.get())
    $scope.user = User.get();
  });
