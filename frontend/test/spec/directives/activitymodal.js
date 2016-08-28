'use strict';

describe('Directive: ActivityModal', function () {

  // load the directive's module
  beforeEach(module('frontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-activity-modal></-activity-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ActivityModal directive');
  }));
});
