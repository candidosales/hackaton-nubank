'use strict';

describe('Service: MissionAdmin', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var MissionAdmin;
  beforeEach(inject(function (_MissionAdmin_) {
    MissionAdmin = _MissionAdmin_;
  }));

  it('should do something', function () {
    expect(!!MissionAdmin).toBe(true);
  });

});
