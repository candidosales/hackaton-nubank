'use strict';

describe('Service: mission', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var mission;
  beforeEach(inject(function (_mission_) {
    mission = _mission_;
  }));

  it('should do something', function () {
    expect(!!mission).toBe(true);
  });

});
