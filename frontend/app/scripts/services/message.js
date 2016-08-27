'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Message
 * @description
 * # Message
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('Message', function ($resource, APIConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(APIConfig.endpoint+'messages/'+':id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        }
      });
  });
