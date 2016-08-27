'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Skill
 * @description
 * # Skill
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('Skill', function ($resource, APIConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(APIConfig.endpoint+'skills/'+':id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        }
      });
  });
