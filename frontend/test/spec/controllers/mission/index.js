'use strict';

describe('Controller: MissionIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var MissionIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MissionIndexCtrl = $controller('MissionIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MissionIndexCtrl.awesomeThings.length).toBe(3);
  });
});
