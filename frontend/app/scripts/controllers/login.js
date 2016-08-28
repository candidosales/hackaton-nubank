'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, $auth) {

    $scope.login = {
        email: "",
        password: ""
    };
    
    $scope.signIn = function(){
        console.log($scope.login)

        $auth.submitLogin($scope.login)
        .then(function(resp) {
          console.log($scope.login)
        })
        .catch(function(resp) {
          // handle error response
        });
    }
  });
