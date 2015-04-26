/* @shojib */

'use strict';

import angular from "angular";
import "angular-ui/ui-router";
import "angular/bower-angular-mocks";
import Header from "public/modules/common/header/main";

describe('Header Module Test:', function() {

  describe('Controller:', function() {

    var scope;

    beforeEach(function() {
      module(Header.name);
    });

    it('Should have a header module defined', function() {
      expect(Header.name).toBeDefined();
    });

  });

});
