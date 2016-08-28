'use strict';

describe('Controller: ActivityIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var ActivityIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivityIndexCtrl = $controller('ActivityIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActivityIndexCtrl.awesomeThings.length).toBe(3);
  });
});
