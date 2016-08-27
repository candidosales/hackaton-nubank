'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ActivitiesCtrl
 * @description
 * # ActivitiesCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ActivitiesCtrl', function ($scope, Activity) {

    $scope.activity = Activity.query();

  });
