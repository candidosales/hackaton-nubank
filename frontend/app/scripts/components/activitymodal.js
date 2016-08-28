'use strict';

/**
 * @ngdoc component
 * @name frontendApp.ActivityModal
 * @description
 * # ActivityModal
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .component('activityModal', {
	  templateUrl: 'views/modal/activity.html',
	  bindings: {
	    resolve: '<',
	    close: '&',
	    dismiss: '&'
	  },
	  controller: function () {
	    var $ctrl = this;

	    $ctrl.$onInit = function () {
	      $ctrl.activity = $ctrl.resolve.activity;
	    };

	    $ctrl.ok = function () {
	      $ctrl.close();
	    };

	    // $ctrl.cancel = function () {
	    //   $ctrl.dismiss({$value: 'cancel'});
	    // };
	  }
});
