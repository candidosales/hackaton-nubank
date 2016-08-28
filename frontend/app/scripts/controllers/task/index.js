'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:TaskIndexCtrl
 * @description
 * # TaskIndexCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('TaskIndexCtrl', function ($scope, $uibModal, $routeParams, Task, Login, Mission) {
    //   $scope.user = Login.get();
        $scope.mission = Mission.get({id: $routeParams.mission_id });

      console.log($scope.mission);
      console.log($scope.tasks);

      $scope.showTask = function (task_id) {
        $scope.task = Task.get({id: task_id});
        var modalInstance = $uibModal.open({
          animation: false,
          component: 'activityModal',
          resolve: {
            task: function () {
              return $scope.task;
            }
          }
        });

        $scope.goMission = function() {
            console.log("dsadasda");
            $location.path('/user/'+$routeParams.user_id+'/mission/');
        }

        modalInstance.result.then(function () {
          // console.log('aqui');
        }, function () {
          console.log('ali');
        });
      }

    });
