"use strict";

import angular from "angular";

var DefaultError = angular.module("ngES6.error.404", ["ui.router"]);

DefaultError.config([
  "$stateProvider", function(stateProvider) {
    stateProvider.state("error404", {
      url: "/error/404",
      templateUrl: "/modules/common/error/tmpl/404.html"
    });
  }
]);
