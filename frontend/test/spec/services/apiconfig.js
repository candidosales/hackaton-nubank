'use strict';

describe('Service: APIConfig', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var APIConfig;
  beforeEach(inject(function (_APIConfig_) {
    APIConfig = _APIConfig_;
  }));

  it('should do something', function () {
    expect(!!APIConfig).toBe(true);
  });

});
