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
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "angular-cookies": "github:angular/bower-angular-cookies@1.3.15",
    "angular-translate": "github:angular-translate/bower-angular-translate@2.6.1",
    "angular-translate/bower-angular-translate-loader-static-files": "github:angular-translate/bower-angular-translate-loader-static-files@2.6.1",
    "angular-translate/bower-angular-translate-loader-url": "github:angular-translate/bower-angular-translate-loader-url@2.6.1",
    "angular-translate/bower-angular-translate-storage-cookie": "github:angular-translate/bower-angular-translate-storage-cookie@2.6.1",
    "angular-translate/bower-angular-translate-storage-local": "github:angular-translate/bower-angular-translate-storage-local@2.6.1",
    "angular-ui/ui-router": "github:angular-ui/ui-router@0.2.13",
    "babel": "npm:babel-core@5.1.11",
    "babel-runtime": "npm:babel-runtime@5.1.11",
    "components/angular-resource": "github:components/angular-resource@1.2.0",
    "components/jquery": "github:components/jquery@2.1.3",
    "core-js": "npm:core-js@0.8.4",
    "github:angular-translate/bower-angular-translate-loader-static-files@2.6.1": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.6.1"
    },
    "github:angular-translate/bower-angular-translate-storage-cookie@2.6.1": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.6.1"
    },
    "github:angular-translate/bower-angular-translate-storage-local@2.6.1": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.6.1"
    },
    "github:angular-translate/bower-angular-translate@2.6.1": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular-ui/ui-router@0.2.13": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-cookies@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.8.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

