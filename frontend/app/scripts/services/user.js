'use strict';

/**
 * @ngdoc service
 * @name frontendApp.User
 * @description
 * # User
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('User', function () {
    var user = {};

    this.get = function () {
      return angular.fromJson(sessionStorage.userService);
    };

    this.set = function (userData) {
      sessionStorage.userService = angular.toJson(userData);
    };
  });
