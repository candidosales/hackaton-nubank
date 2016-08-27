'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Activity
 * @description
 * # Activity
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('Activity', function ($resource, APIConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(APIConfig.endpoint+'activities/'+':id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        }
      });
  });
