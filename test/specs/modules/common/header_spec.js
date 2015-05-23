/* @shojib */

'use strict';

describe('Header Module Test:', function() {

  describe('Controller:', function() {

    var scope;

    beforeEach(function() {
      angular.mock.module('ngES6.header');
    });

    it('Should have a header module defined', function() {
      expect('ngES6.header').toBeDefined();
    });

  });

});
