'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, $auth, $location, UserServer) {

    $scope.login = {
        email: "",
        password: ""
    };
    
    $scope.signIn = function(){

        $auth.submitLogin($scope.login)
        .then(function(resp) {
          // console.log(resp);
          if (resp.id) {
            var promise = UserServer.get({id: resp.id});
            console.log(promise);
            promise.$promise.then(function (user) {
              if (user.missions) {
                $location.path('/user/'+user.id+'/mission');
              } else {
                $location.path('/user/'+user.id+'/mission/add');
              }
            })
          }
        })
        .catch(function(resp) {
          console.log(resp);
        });
    }
  });
