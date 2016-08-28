'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:TaskIndexCtrl
 * @description
 * # TaskIndexCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('TaskIndexCtrl', function ($scope, $uibModal, $routeParams, Task, Mission) {
      console.log($routeParams);
      $scope.mission = Mission.get({id: $routeParams.mission_id, user_id: $routeParams.user_id });

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

        modalInstance.result.then(function () {
          // console.log('aqui');
        }, function () {
          console.log('ali');
        });
      }

    });
