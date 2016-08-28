'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionAddCtrl
 * @description
 * # MissionAddCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionAddCtrl', function ($scope, $location, Mission) {
      $scope.mission = {goal:"", prize:"", moth:""}

      $scope.addMission = function(){
          console.log($scope.mission);
        //   Mission.save($scope.mission);
        console.log($location.path());
          $location.path('/mission/:id/add');
      }
  });
