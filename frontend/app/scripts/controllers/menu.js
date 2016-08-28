'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MenuCtrl', function ($scope, $auth, $location, User, $routeParams) {

    $scope.goMission = function() {
      $location.path('/user/'+$routeParams.user_id+'/mission/');
    }

    $scope.signOut = function() {
      $auth.signOut()
        .then(function(resp) {
          console.log(resp);
          $location.path('/login');
        })
        .catch(function(resp) {
          console.log(resp);
        });
    };

  });
