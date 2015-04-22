"use strict";

import * as controller from "./files/controller";

var Poem = angular.module("ngGo.poem", ["ui.router"]);

Poem.config([
  "$stateProvider", function(state_provider) {
    return state_provider.state("poem", {
      url: "/poem",
      templateUrl: "/modules/poem/tmpl/poem.html",
      controller: controller
    });
  }
]);

Poem.controller("controller", controller);

export default Poem;