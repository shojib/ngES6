"use strict";

import factory from "./files/factory";
import service from "./files/service";
import controller from "./files/controller";

var Article = angular.module("ngES6.article", [
  "ui.router",
  "ngAnimate",
  "ngResource"
]);

Article.config([
  "$stateProvider", function(stateProvider) {
    stateProvider.state("article", {
      resolve: {
        service: "service"
      },
      url: "/article",
      templateUrl: "/modules/article/tmpl/article.html",
      controller: controller
    });
  }
]);


Article.factory("factory", factory);
Article.service("service", service);
Article.controller("controller", controller);
