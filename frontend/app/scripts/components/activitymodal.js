'use strict';

/**
 * @ngdoc component
 * @name frontendApp.ActivityModal
 * @description
 * # Activity
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
	    console.log($ctrl.activity)

	    // $ctrl.$onInit = function () {
	    //   $ctrl.items = $ctrl.resolve.items;
	    //   $ctrl.selected = {
	    //     item: $ctrl.items[0]
	    //   };
	    // };

	    $ctrl.ok = function () {
	      $ctrl.close();
	    };

	    // $ctrl.cancel = function () {
	    //   $ctrl.dismiss({$value: 'cancel'});
	    // };
	  }
});
