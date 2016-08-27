'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SkillsCtrl', function ($scope, Skill) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.skills = Skill.get();



  });
