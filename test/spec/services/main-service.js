'use strict';

describe('Service: main-service', function() {

  // load the service's module
  beforeEach(module('swApp'));

  // instantiate service
  var main-service;
  beforeEach(inject(function(_main-service_) {
    main-service = _main-service_;
  }));

  it('should return value 42', function() {
    expect(main-service.value).toBe(42);
  });

});
