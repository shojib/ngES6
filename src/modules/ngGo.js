import angular from "angular";

// import common from ("common/main");
// import home from ("home/main");
// import poem from ("poem/main");
// import article from ("article/main");

"use strict";

// var ngGo = angular.module("ngGo", [
//   "angular"
//   "ngAnimate"
//   "ngTranslate"
//   "ngTranslateLoader"
//   "ngTranslateLoaderStaticFile"
//   "ngTranslateStorageCookie"
//   "ngTranslateStorageLocal"
//   "ngCookies"
//   "ngResource"
//   "uiRouter"
// ]) ;

var ngGo = angular.module("ngGo", [
  // "pascalprecht.translate", 
  // "ui.router", 
  // "ngAnimate"
  // "ngGo.common", 
  // "ngGo.home", 
  // "ngGo.poem", 
  // "ngGo.article"
]);

// ngGo.config([
//   "$urlRouterProvider", 
//   "$httpProvider", 
//   "$translateProvider", 
//   "$logProvider", 
//   "$compileProvider", function(
//     urlRouterProvider, 
//     httpProvider, 
//     translateProvider, 
//     logProvider, 
//     compileProvider) {

//     httpProvider.defaults.headers.common["Accept"] = "application/json";
//     httpProvider.interceptors.push('HttpInterceptor');

//     translateProvider.useStaticFilesLoader({
//       prefix: "../i18n/",
//       suffix: ".json"
//     });

//     translateProvider.preferredLanguage("en_US");
//     urlRouterProvider.when("", "/home");
//     urlRouterProvider.otherwise("/error/404");
    
//     logProvider.debugEnabled(true);
//     compileProvider.debugInfoEnabled(true);
//     httpProvider.useApplyAsync(true);
    
//   }
// ]);

// ngGo.run([function() {}]);


export default ngGo;