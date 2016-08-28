'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Login
 * @description
 * # Login
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('Login', function ($resource, APIConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(APIConfig.endpoint+'get_user/'+':id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        }
      });
  });
