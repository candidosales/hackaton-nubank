'use strict';

/**
 * @ngdoc component
 * @name frontendApp.ActivityModal
 * @description
 * # ActivityModal
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .component('taskModal', {
	  templateUrl: 'views/modal/task.html',
	  bindings: {
	    resolve: '<',
	    close: '&',
	    dismiss: '&'
	  },
	  controller: function () {
	    var $ctrl = this;

	    $ctrl.$onInit = function () {
	      $ctrl.task = $ctrl.resolve.task;
	    };

	    $ctrl.ok = function () {
	      $ctrl.close();
	    };

	    // $ctrl.cancel = function () {
	    //   $ctrl.dismiss({$value: 'cancel'});
	    // };
	  }
});
