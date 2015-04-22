import angular from "angular";
import ngCookies from "angular-cookies";
import ngTranslate from "angular-translate";
import uiRouter from "angular-ui/ui-router";
import ngTranslateLoaderStaticFile from "angular-translate/bower-angular-translate-loader-static-files";
import ngTranslateLoader from "angular-translate/bower-angular-translate-loader-url";
import ngTranslateStorageCookie from "angular-translate/bower-angular-translate-storage-cookie";
import ngTranslateStorageLocal from "angular-translate/bower-angular-translate-storage-local";

import "./common/main";
import "./home/main";
import "./poem/main";
import "./article/main";

"use strict";

var ngGo = angular.module("ngGo", [
  "pascalprecht.translate", 
  "ui.router", 
  "ngAnimate",
  "ngGo.common", 
  "ngGo.home",
  "ngGo.poem", 
  "ngGo.article"
]);

ngGo.config([
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

ngGo.run([function() {}]);


export default ngGo;


