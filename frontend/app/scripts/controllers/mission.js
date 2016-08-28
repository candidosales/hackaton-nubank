'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionCtrl
 * @description
 * # MissionCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionCtrl', function ($scope, Mission) {

    $scope.missions = Mission.query();

    $scope.update = function (mission) {
      console.log(mission);
    };
  });
