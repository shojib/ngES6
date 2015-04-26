/* @shojib */

'use strict';

import angular from "angular";
import "angular-ui/ui-router";
import "angular-cookies";
import "angular-translate";
import "angular-translate/bower-angular-translate-loader-static-files";
import "angular-translate/bower-angular-translate-loader-url";
import "angular-translate/bower-angular-translate-storage-cookie";
import "angular-translate/bower-angular-translate-storage-local";
import "angular/bower-angular-mocks";
import Poem from "public/modules/poem/main";


describe('Poem Module Test:', function() {

	describe('Controller:', function() {

		var scope, translate, translateProvider;

		beforeEach(function() {
			module('ui.router');
			module('pascalprecht.translate');
			module(Poem.name);

			inject(function($rootScope, $controller, $translate) {
				scope = $rootScope.$new();

				translate= $translate;
				$controller('controller', {$scope: scope, $translate: translate});
			});
		});

		it('Should have a Poem module defined', function() {
			expect('ngES6.poem').toBeDefined();
		});

	});

});
