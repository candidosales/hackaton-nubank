'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MenuCtrl', function ($scope, $auth, $location, User) {
    var user = User.get();

    $scope.goMission = function() {
      console.log("dsadasda");
      $location.path('/user/'+user.id+'/mission/');
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
