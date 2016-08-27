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

    $scope.skills = Skill.query();

  });
