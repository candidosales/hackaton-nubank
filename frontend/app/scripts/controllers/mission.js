'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionCtrl
 * @description
 * # MissionCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionCtrl', function ($scope, $location, Mission) {

    $scope.missions = Mission.query();

    $scope.update = function (mission) {
    	console.log(mission);
    }

    $scope.goMission = function(){
        console.log("dsadasda");
        $location.path('/user/'+user.id+'/mission/');
    }

  });
