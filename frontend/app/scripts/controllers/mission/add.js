'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionAddCtrl
 * @description
 * # MissionAddCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionAddCtrl', function ($scope,  $auth, $routeParams, $location, MissionAdmin) {
      $scope.mission = {
        mission: {
          name: "",
          description: "",
          goal:"",
          value:"",
          duration_month: 1,
          user_id: $routeParams.user_id
        }
      }

      $scope.addMission = function(){
        var mission = new MissionAdmin($scope.mission);
        console.log(mission);
        var promise = mission.$save({user_id: $routeParams.user_id});
        promise.then(function (mission) {
          $location.path('/user/'+$routeParams.user_id+'/mission/'+mission.id+'/task');
        })
      }
  });
