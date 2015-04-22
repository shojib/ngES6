"use strict";

var Home = angular.module("ngGo.home", ["ui.router"]);

Home.config([
  "$stateProvider", function(stateProvider) {
    return stateProvider.state("home", {
      url: "/home",
      templateUrl: "/modules/home/tmpl/home.html"
    });
  }
]);

export default Home;