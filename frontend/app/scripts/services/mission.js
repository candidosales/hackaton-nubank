'use strict';

/**
 * @ngdoc service
 * @name frontendApp.mission
 * @description
 * # mission
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('Mission', function ($resource, APIConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(APIConfig.endpoint+'admin/missions/', {
        update: {
          method: 'POST'
        }
      });
  });
