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
    var $ctrl = this;
  	$scope.user = Login.get();
    $scope.activities = Activity.query();

    $scope.showActivity = function (activity_id) {
      console.log(activity_id);
      // $ctrl.activity = Activity.get({id: activity_id});
      $ctrl.activity = 23;
      var modalInstance = $uibModal.open({
        animation: false,
        component: 'activityModal',
        resolve: {
          activity: function () {
            return $ctrl.activity;
          }
        }
      });

      modalInstance.result.then(function () {
        console.log('aqui');
      }, function () {
        console.log('ali');
      });
    }


  });
