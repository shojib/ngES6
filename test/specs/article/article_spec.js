/* @shojib */

'use strict';


import angular from "angular";
import "angular/bower-angular-mocks";
import "angular-ui/ui-router";
import "angular/bower-angular-resource";
import "angular/bower-angular-animate";
import Article from "public/modules/article/main";


describe('Article Module Test:', function() {

  describe('Controller:', function() {

    var scope;

    beforeEach(function() {
      // module('ngResource');
      module('ui.router');
      // module('ngAnimate');
      module(Article.name);

      inject(function($rootScope, $controller, $resource) {
        scope = $rootScope.$new();
        $controller('controller', {$scope: scope});
      });
    });

    it('Should have an Article module defined', function() {
      expect(Article.name).toBeDefined();
    });

    it('Should be equal to "education"', function() {
      expect(scope.searchQuery).toBe('Technology');
    });

  });

});
