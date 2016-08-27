'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MessagesCtrl
 * @description
 * # MessagesCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MessagesCtrl', function ($scope, Message) {

    $scope.messages = Message.query();

  });
