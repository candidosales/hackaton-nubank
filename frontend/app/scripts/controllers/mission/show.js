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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mission = Mission.query();
  });
