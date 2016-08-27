'use strict';

describe('Controller: SkillsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var SkillsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SkillsCtrl = $controller('SkillsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SkillsCtrl.awesomeThings.length).toBe(3);
  });
});
