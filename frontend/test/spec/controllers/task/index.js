'use strict';

describe('Controller: TaskIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var TaskIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskIndexCtrl = $controller('TaskIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TaskIndexCtrl.awesomeThings.length).toBe(3);
  });
});
