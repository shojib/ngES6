"use strict";

import angular from "angular";

var Home = angular.module("ngGo.home", ["ui.router"]);

Home.config([
  "$stateProvider", function(state_provider) {
    return state_provider.state("home", {
      url: "/home",
      templateUrl: "/modules/home/tmpl/home.html"
    });
  }
]);


export default Home;