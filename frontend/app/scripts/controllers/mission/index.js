'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionIndexCtrl
 * @description
 * # MissionIndexCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionIndexCtrl', function ($scope, $routeParams, $location, Mission) {
    $scope.userMission = Mission.query({
        user_id: $routeParams.user_id
    });

    $scope.showMission = function(id){
        $location.path('/user/'+$routeParams.user_id+'/mission/'+id+'/task')
    }

    $scope.goMission = function(){
      $location.path('/user/'+$routeParams.user_id+'/mission/add');
    }
  });
