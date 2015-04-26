"use strict";

import angular from "angular";

var Home = angular.module("ngES6.home", ["ui.router"]);

Home.config([
  "$stateProvider", function(stateProvider) {
    stateProvider.state("home", {
      url: "/home",
      templateUrl: "/modules/home/tmpl/home.html"
    });
  }
]);
