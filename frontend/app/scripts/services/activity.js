'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Activity
 * @description
 * # Activity
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('Activity', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('api/teste/:id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        }
      });
  });
