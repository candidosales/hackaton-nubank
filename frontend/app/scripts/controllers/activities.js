'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ActivitiesCtrl
 * @description
 * # ActivitiesCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ActivitiesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.activity = [
        {
            id: 1,
            name: "name 1"
        },
        {
            id: 2,
            name: "name 2"
        }
    ];

  });
