'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionAddCtrl
 * @description
 * # MissionAddCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionAddCtrl', function ($scope, $auth, $location, Mission) {

      $scope.mission = {
        mission: {
          name: "",
          description: "",
          goal:"",
          value:"",
          start_date: new Date(),
          end_date: new Date(),
          user_id: $routeParams.userId
        }
      }

      $scope.addMission = function(){
        var mission = new Mission($scope.mission);
        var promise = mission.$save();
        promise.then(function (mission) {
          $location.path('/mission/'+mission.id+'/task');
        })
      }

      $scope.signOut = function(){
        $auth.signOut()
        .then(function(resp){
          console.log(resp);
          console.log("funcionou")
          $location.path('/login');
        })
        .catch(function(resp){
          console.log("nopes");
          console.log(resp);
        })
      }
  });
