'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionAddCtrl
 * @description
 * # MissionAddCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionAddCtrl', function ($scope, $routeParams, $location, Mission) {

      console.log($routeParams);


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
          $location.path('/mission/'+mission.id+'/activity');
        })
      }
  });
