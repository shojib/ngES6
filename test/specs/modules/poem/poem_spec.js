/* @shojib */

'use strict';

describe('Poem Module Test:', function() {

	describe('Controller:', function() {

		var scope, translate, translateProvider;

		beforeEach(function() {
			angular.mock.module('ngES6.poem');

			inject(function($rootScope, $controller, $translate) {
				scope = $rootScope.$new();
				translate = $translate;
				$controller('controller', {$scope: scope, $translate: translate});
			});
		});

		it('Should have a Poem module defined', function() {
			expect('ngES6.poem').toBeDefined();
		});

	});

});
