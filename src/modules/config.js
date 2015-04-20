System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    angular: "../libs/angular/angular.js",
    ngCookies: "../libs/angular-cookies/angular-cookies.js",
    ngTranslate: "../libs/angular-translate/angular-translate.js",
    ngResource: "../libs/angular-resource/angular-resource.js",
    uiRouter: "../libs/angular-ui-router/release/angular-ui-router.js",
    ngAnimate: "../libs/angular-animate/angular-animate.js",
    ngTranslateLoader: "../libs/angular-translate-loader-url/angular-translate-loader-url.js",
    ngTranslateLoaderStaticFile: "../libs/angular-translate-loader-static-files/angular-translate-loader-static-files.js",
    ngTranslateStorageCookie: "../libs/angular-translate-storage-cookie/angular-translate-storage-cookie.js",
    ngTranslateStorageLocal: "../libs/angular-translate-storage-local/angular-translate-storage-local.js",
    "github:*": "../src/jspm_packages/github/*.js",
    "npm:*": "../src/jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.1.10",
    "babel-runtime": "npm:babel-runtime@5.1.10",
    "core-js": "npm:core-js@0.8.4",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.8.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

System.import("modules/ngGo");