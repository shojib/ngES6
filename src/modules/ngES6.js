"use strict";

import angular from "angular/angular";
import "angular-ui/ui-router";
import "angular/bower-angular-animate";
import "angular/bower-angular-resource";
import "angular-cookies";
import "angular-translate";
import "angular-translate/bower-angular-translate-loader-static-files";
import "angular-translate/bower-angular-translate-loader-url";
import "angular-translate/bower-angular-translate-storage-cookie";
import "angular-translate/bower-angular-translate-storage-local";

import "./common/main";
import "./home/main";
import "./poem/main";
import "./article/main";
import "./reactjs/main";

var ngES6 = angular.module("ngES6", [
  "pascalprecht.translate",
  "ui.router",
  "ngAnimate",
  "ngES6.common",
  "ngES6.home",
  "ngES6.poem",
  "ngES6.article",
  "ngES6.reactjs"
]);

ngES6.config([
  "$urlRouterProvider",
  "$httpProvider",
  "$translateProvider",
  "$logProvider",
  "$compileProvider", function(
    urlRouterProvider,
    httpProvider,
    translateProvider,
    logProvider,
    compileProvider) {

    httpProvider.defaults.headers.common["Accept"] = "application/json";
    httpProvider.interceptors.push('HttpInterceptor');

    translateProvider.useStaticFilesLoader({
      prefix: "../i18n/",
      suffix: ".json"
    });

    translateProvider.preferredLanguage("en_US");
    urlRouterProvider.when("", "/home");
    urlRouterProvider.otherwise("/error/404");

    logProvider.debugEnabled(true);
    compileProvider.debugInfoEnabled(true);
    httpProvider.useApplyAsync(true);

  }
]);

ngES6.run(function() {});

angular.bootstrap(document, ["ngES6"]);
