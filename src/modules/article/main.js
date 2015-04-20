"use strict";

import * as factory from "article/files/factory";
import * as service from "article/files/service";
import * as controller from "article/files/controller";

var Article = angular.module("ngGo.article", [
  "ui.router", 
  "ngAnimate", 
  "ngResource"
]);

Article.config([
  "$stateProvider", function(state_provider) {
    return state_provider.state("article", {
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

export default Article;