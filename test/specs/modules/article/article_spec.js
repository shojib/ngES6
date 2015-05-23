/* @shojib */

'use strict';

describe('Article Module Test:', function() {

  describe('Controller:', function() {

    var scope;

    beforeEach(function() {
      angular.mock.module('ngES6.article');

      inject(function($rootScope, $controller, $resource) {
        scope = $rootScope.$new();
        $controller('controller', {$scope: scope});
      });
    });

    it('Should have an Article module defined', function() {
      expect('ngES6.article').toBeDefined();
    });

    it('Should be equal to "Technology"', function() {
      expect(scope.searchQuery).toBe('Technology');
    });

  });

});
