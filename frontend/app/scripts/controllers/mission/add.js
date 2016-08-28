'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MissionAddCtrl
 * @description
 * # MissionAddCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MissionAddCtrl', function ($scope, $location, $auth, Mission) {
      $scope.mission = {
      	goal:"",
      	value:"",
      	durationMonths:""
      }

      $scope.addMission = function(){
        var mission = new Mission($scope.mission);
        var promise = mission.$save();
        promise.then(function (mission) {
          $location.path('/mission/'+mission.id+'/activity');
        })
      }

      $scope.signOut = function(){
        $auth.signOut()
        .then(function(resp){
            console.log("funcionou")
        })
        .catch(function(){
            console.log("nopes")
        })
      }
  });
