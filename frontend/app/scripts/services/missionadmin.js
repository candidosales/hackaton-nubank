'use strict';

/**
 * @ngdoc service
 * @name frontendApp.MissionAdmin
 * @description
 * # MissionAdmin
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('MissionAdmin', function ($resource, APIConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(APIConfig.endpoint+'admin/missions/:id', { id: '@_id' }, {
        update: {
          method: 'POST'
        },
        get: {
          method: 'GET',
          params: {user_id: '@user_id'}
        } ,
        query: {
          method: 'GET',
          params: {user_id: '@user_id'}
        }
      });
  });
