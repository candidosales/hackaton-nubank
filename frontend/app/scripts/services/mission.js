'use strict';

/**
 * @ngdoc service
 * @name frontendApp.mission
 * @description
 * # mission
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('Mission', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('api/teste/:id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        }
      });
  });
