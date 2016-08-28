'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionShowCtrl
 * @description
 * # MissionShowCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionShowCtrl', function ($scope, $routeParams, $location, Mission) {
    // $scope.mission = Mission.get({user_id: $routeParams.user_id});

    $scope.showMission = function(id){
        $location.path('/user/'+$routeParams.user_id+'/mission/'+id+'/task')
    }

    $scope.addMission = function(){
      var mission = new Mission($scope.mission);
      var promise = mission.$save();
      promise.then(function (mission) {
        $location.path('/mission/'+mission.id+'/task');
      })
    }
  });
