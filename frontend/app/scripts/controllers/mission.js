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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var missions = [
    	{
    		id: 1,
    		name: "teste"
    	},
    	{
    		id: 2,
    		name: "teste2"
    	}
    ]

    $scope.missions = missions;

    $scope.update = function (mission) {
    	console.log(mission);
    }
  });
