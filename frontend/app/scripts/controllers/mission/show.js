'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionShowCtrl
 * @description
 * # MissionShowCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionShowCtrl', function (Mission) {
    $scope.mission = Mission.query();
  });
