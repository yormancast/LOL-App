'use strict';

describe('Controller: ModalCtrlCtrl', function() {

  // load the controller's module
  beforeEach(module('swApp'));

  var ModalCtrlCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalCtrlCtrl = $controller('ModalCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should set name to ModalCtrlCtrl', function() {
    expect(scope.name).toBe('ModalCtrlCtrl');
  });
});
