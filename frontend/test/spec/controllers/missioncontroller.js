'use strict';

describe('Controller: MissioncontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var MissioncontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MissioncontrollerCtrl = $controller('MissioncontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MissioncontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
