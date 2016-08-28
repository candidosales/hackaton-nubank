'use strict';

/**
 * @ngdoc service
 * @name frontendApp.UserServer
 * @description
 * # UserServer
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('UserServer', function ($resource, APIConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(APIConfig.endpoint+'users/:id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        },
        get: {
          method: 'GET'
        }
      });
  });
