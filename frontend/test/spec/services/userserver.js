'use strict';

describe('Service: UserServer', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var UserServer;
  beforeEach(inject(function (_UserServer_) {
    UserServer = _UserServer_;
  }));

  it('should do something', function () {
    expect(!!UserServer).toBe(true);
  });

});
