'use strict';

describe('Controller: MissionAddCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var MissionAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MissionAddCtrl = $controller('MissionAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MissionAddCtrl.awesomeThings.length).toBe(3);
  });
});
