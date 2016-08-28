'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ActivityIndexCtrl
 * @description
 * # ActivityIndexCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ActivityIndexCtrl', function ($scope, $uibModal, Activity, Login) {
  	$scope.user = Login.get();
    $scope.activities = Activity.query();

    $scope.showActivity = function (activity_id) {
      $scope.activity = Activity.get({id: activity_id});
      var modalInstance = $uibModal.open({
        animation: false,
        component: 'activityModal',
        resolve: {
          activity: function () {
            return $scope.activity;
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
