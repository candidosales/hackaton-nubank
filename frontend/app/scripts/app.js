'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ng-token-auth'
  ])
  .config(function ($routeProvider, $authProvider) {
    $authProvider.configure({
        apiUrl: 'https://hackaton-nubank.herokuapp.com'
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/mission', {
        templateUrl: 'views/mission.html',
        controller: 'MissionCtrl'
      })
      .when('/activities', {
        templateUrl: 'views/activities.html',
        controller: 'ActivitiesCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/messages', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/user/:user_id/mission/add', {
        templateUrl: 'views/mission/add.html',
        controller: 'MissionAddCtrl',
      })
      .when('/user/:user_id/mission/:id', {
        templateUrl: 'views/mission/show.html',
        controller: 'MissionShowCtrl'
      })
      .when('/user/:user_id/mission/:id/activity', {
        templateUrl: 'views/activity/index.html',
        controller: 'ActivityIndexCtrl'
      })
      .when('/user/login', {
        templateUrl: 'views/user/login.html',
        controller: 'UserLoginCtrl',
        controllerAs: 'user/login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
