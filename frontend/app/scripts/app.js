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
    $authProvider
      .configure({
        apiUrl: 'https://hackaton-nubank.herokuapp.com'
      });

    $routeProvider
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
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
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .when('/user/:user_id/mission/:id', {
        templateUrl: 'views/mission/show.html',
        controller: 'MissionShowCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .when('/user/:user_id/mission/:mission_id/task', {
        templateUrl: 'views/task/index.html',
        controller: 'TaskIndexCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .when('/user/:user_id/mission', {
        templateUrl: 'views/mission/index.html',
        controller: 'MissionIndexCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .when('/user/:id/show', {
        templateUrl: 'views/user/show.html',
        controller: 'UserShowCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .otherwise({
        redirectTo: '/login'
      });
  })

  .run(function ($rootScope, $location, User, UserServer) {
    $rootScope.$on('auth:validation-success', function(ev, user) {
      // console.log('validation-success');
      // console.log(user);
      // $rootScope.currentUser = user;
      var curent_user = User.get();
    //   console.log(curent_user.id);
      if ( !curent_user.id){
        var promise = UserServer.get({id: user.id})

        promise.$promise.then(function (updatedUser) {
          // console.log(updatedUser);
          User.set(updatedUser);
        })
        // User.set(user);
      }
    });
    $rootScope.$on('auth:validation-error', function(ev, user) {
      // console.log(ev);
      // console.log(user);
      // $rootScope.currentUser = "";
      User.set({});
      $location.path('/login');
    });
    $rootScope.$on('auth:invalid', function(ev) {
      console.log(ev);
      $location.path('/login');
    });
  });
