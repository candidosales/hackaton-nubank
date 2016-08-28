'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionAddCtrl
 * @description
 * # MissionAddCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionAddCtrl', function ($scope,  $auth, $routeParams, $location, Mission) {
      $scope.mission = {
        mission: {
          name: "",
          description: "",
          goal:"",
          value:"",
          duration_month: 1,
          user_id: $routeParams.user_id
        }
      }

      $scope.addMission = function(){
        var mission = new Mission($scope.mission);
        var promise = mission.$save();
        promise.then(function (mission) {
          $location.path('/mission/'+mission.id+'/task');
        })
      }
  });
