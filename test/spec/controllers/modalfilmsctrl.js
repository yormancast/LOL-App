'use strict';

describe('Controller: ModalFilmsCtrlCtrl', function() {

  // load the controller's module
  beforeEach(module('swApp'));

  var ModalFilmsCtrlCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalFilmsCtrlCtrl = $controller('ModalFilmsCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should set name to ModalFilmsCtrlCtrl', function() {
    expect(scope.name).toBe('ModalFilmsCtrlCtrl');
  });
});
