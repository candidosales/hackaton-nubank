'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MessagesCtrl
 * @description
 * # MessagesCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MessagesCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.messages = "message  ";
  });
