/* @shojib */

'use strict';

describe('Home Module Test:', function() {

  describe('Controller:', function() {

    var scope;

    beforeEach(function() {
      angular.mock.module('ngES6.home');

      inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
      });
    });

    it('Should have a Home module defined', function() {
      expect('ngES6.home').toBeDefined();
    });

  });

});
