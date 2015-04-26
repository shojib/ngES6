/* @shojib */

'use strict';

import angular from "angular";
import "angular-ui/ui-router";
import "angular/bower-angular-mocks";
import Home from "public/modules/home/main";

describe('Home Module Test:', function() {

  describe('Controller:', function() {

    var scope;

    beforeEach(function() {
      module(Home.name);

      inject(function($rootScope) {
        scope = $rootScope.$new();
      });
    });

    it('Should have a Home module defined', function() {
      expect(Home.name).toBeDefined();
    });

  });

});
