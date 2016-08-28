'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Task
 * @description
 * # Task
 * Service in the frontendApp.
 */

angular.module('frontendApp')
.service('Task', function ($resource, APIConfig) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(APIConfig.endpoint+'admin/missions/:mission_id/tasks/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      },
      get: {
        method: 'GET',
        params: {mission_id: '@mission_id'}
      }
    });
});
