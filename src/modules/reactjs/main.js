"use strict";

import angular from "angular";

var ReactJS = angular.module("ngES6.reactjs", ["ui.router"]);

ReactJS.config([
  "$stateProvider", function(stateProvider) {
    stateProvider.state("reactjs", {
      url: "/reactjs",
      templateUrl: "/modules/reactjs/tmpl/reactjs.html"
    });
  }
]);
