'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SkillsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.skills = [
        {
            id:1,
            name:"teste"
        },
        {
            id:2,
            name:"teste"
        }
    ];


  });
