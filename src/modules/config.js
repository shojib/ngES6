System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "../jspm_packages/github/*",
    "npm:*": "../jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.7",
    "angular-cookies": "github:angular/bower-angular-cookies@1.4.7",
    "angular-translate": "github:angular-translate/bower-angular-translate@2.8.1",
    "angular-translate/bower-angular-translate-loader-static-files": "github:angular-translate/bower-angular-translate-loader-static-files@2.8.1",
    "angular-translate/bower-angular-translate-loader-url": "github:angular-translate/bower-angular-translate-loader-url@2.8.1",
    "angular-translate/bower-angular-translate-storage-cookie": "github:angular-translate/bower-angular-translate-storage-cookie@2.8.1",
    "angular-translate/bower-angular-translate-storage-local": "github:angular-translate/bower-angular-translate-storage-local@2.8.1",
    "angular-ui/ui-router": "github:angular-ui/ui-router@0.2.15",
    "angular/bower-angular-animate": "github:angular/bower-angular-animate@1.4.7",
    "angular/bower-angular-mocks": "github:angular/bower-angular-mocks@1.4.7",
    "angular/bower-angular-resource": "github:angular/bower-angular-resource@1.4.7",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "components/angular-resource": "github:components/angular-resource@1.2.0",
    "components/jquery": "github:components/jquery@2.1.4",
    "core-js": "npm:core-js@1.2.1",
    "systemjs": "npm:systemjs@0.19.4",
    "github:angular-translate/bower-angular-translate-loader-static-files@2.8.1": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.8.1"
    },
    "github:angular-translate/bower-angular-translate-storage-cookie@2.8.1": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.8.1"
    },
    "github:angular-translate/bower-angular-translate-storage-local@2.8.1": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.8.1"
    },
    "github:angular-translate/bower-angular-translate@2.8.1": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-animate@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-cookies@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-mocks@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es6-module-loader@0.17.8": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "when": "npm:when@3.7.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:systemjs@0.19.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "es6-module-loader": "npm:es6-module-loader@0.17.8",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "when": "npm:when@3.7.3"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:when@3.7.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
