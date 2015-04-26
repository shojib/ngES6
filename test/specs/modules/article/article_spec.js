/* @shojib */

'use strict';

define(["require", "angular", "ngMocks", "ngAnimate", "ngResource", "uiRouter", "Article"],

  function(require, angular, mocks, animate, resource, router, article) {

    describe('Article Module Test:', function() {

      describe('Controller:', function() {

        var scope;

        beforeEach(function() {
          module('ngResource');
          module('ui.router');
          module('ngAnimate');
          module('ngES6.article');

          inject(function($rootScope, $controller, $resource) {
            scope = $rootScope.$new();
            $controller('controller', {$scope: scope});
          });
        });

        it('Should have an Article module defined', function() {
          expect('ngES6.article').toBeDefined();
        });

        it('Should be equal to "education"', function() {
          expect(scope.search_query).toBe('Technology');
        });

      });

    });

  }
);
