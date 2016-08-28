'use strict';

describe('Controller: UserShowCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var UserShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserShowCtrl = $controller('UserShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserShowCtrl.awesomeThings.length).toBe(3);
  });
});
