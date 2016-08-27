'use strict';

/**
 * @ngdoc service
 * @name frontendApp.User
 * @description
 * # User
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('User', function ($resource, APIConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(APIConfig.endpoint+'users/'+':id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        }
      });
  });
