/* @shojib */

define(["angular", "ngMocks", "uiRouter", "Header"], 

  function(angular, mocks, router, header) {
    
    'use strict';

    describe('Header Module Test:', function() {

      describe('Controller:', function() {

        var scope;

        beforeEach(function() {
          module('ngES6.header');
        });
        
        it('Should have a header module defined', function() {
          expect('ngES6.header').toBeDefined();
        });

      });

    });

  }
);