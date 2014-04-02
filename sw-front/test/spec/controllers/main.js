'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('swFrontApp'));

  var location,
      scope;

  beforeEach(module('swFrontApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();
    $controller('NavigationController', {
      $scope: scope
    });
  }));

  describe('isActive', function () {
    it('returns true when paths are the same', function () {
      location.path('/test');
      expect(scope.isActive('/test')).toBeTruthy();
    });

    it('returns false when paths are different', function () {
      location.path('/different');
      expect(scope.isActive('/test')).toBeFalsy();
    });
  });
});
