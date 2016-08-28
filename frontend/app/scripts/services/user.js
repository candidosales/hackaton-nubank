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
      return user;
    };

    this.set = function (userData) {
      user = userData;
    };
  });
