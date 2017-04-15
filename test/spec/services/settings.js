'use strict';

describe('Service: settings', function() {

  // load the service's module
  beforeEach(module('swApp'));

  // instantiate service
  var settings;
  beforeEach(inject(function(_settings_) {
    settings = _settings_;
  }));

  it('should be 42', function() {
    expect(settings).toBe(42);
  });

});
