'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionIndexCtrl
 * @description
 * # MissionIndexCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionIndexCtrl', function ($scope, $routeParams, Mission) {
    $scope.missions = Mission.query({
        user_id: $routeParams.user_id
    });
  });
