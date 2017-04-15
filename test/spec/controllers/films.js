'use strict';

describe('Controller: FilmsCtrl', function() {

  // load the controller's module
  beforeEach(module('swApp'));

  var FilmsCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    FilmsCtrl = $controller('FilmsCtrl', {
      $scope: scope
    });
  }));

  it('should set name to FilmsCtrl', function() {
    expect(scope.name).toBe('FilmsCtrl');
  });
});
