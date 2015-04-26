/* @shojib */

var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

// console.log("List of specs:");
// console.log(tests);

require.config({
    baseUrl: "/base/public/modules",
    paths: {
        angular:                    '../jspm_packages/github/angular/bower-angular@1.3.15/angular',
        ngMocks:                    '../jspm_packages/github/angular/bower-angular-mocks@1.3.15/angular-mocks',
        ngAnimate:                  '../jspm_packages/github/angular/bower-angular-animate@1.3.15/angular-animate',
        ngCookies:                  '../jspm_packages/github/angular/bower-angular-cookies@1.3.15/angular-cookies',
        ngResource:                 '../jspm_packages/github/angular/bower-angular-resource@1.3.15/angular-resource',
        ngTranslate:                '../jspm_packages/github/angular-translate/bower-angular-translate@2.6.1/angular-translate',
        uiRouter:                   '../jspm_packages/github/angular-ui/ui-router@0.2.13/angular-ui-router',
        ngTranslateLoader:          '../jspm_packages/github/github/angular-translate/bower-angular-translate-loader-url@2.6.1/angular-translate-loader-url',
        ngTranslateLoaderStaticFile:'../jspm_packages/github/angular-translate/bower-angular-translate-loader-static-files@2.6.1/angular-translate-loader-static-files',
        ngTranslateStorageCookie:   '../jspm_packages/github/angular-translate/bower-angular-translate-storage-cookie@2.6.1/angular-translate-storage-cookie',
        ngTranslateStorageLocal:    '../jspm_packages/github/angular-translate/bower-angular-translate-storage-local@2.6.1/angular-translate-storage-local',
        Home:                       './home/main',
        Article:                    './article/main',
        Poem:                       './poem/main',
        Header:                     './common/header/main'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ngMocks': {
            deps: ['angular'],
            exports: 'ngMocks'
        },
        'ngAnimate': {
            deps: ['angular'],
            exports: 'ngAnimate'
        },
        'ngResource': {
            deps: ['angular'],
            exports: 'ngResource'
        },
        'uiRouter': {
            deps: ['angular'],
            exports: 'uiRouter'
        },
        'ngTranslate': {
            deps: ['angular'],
            exports: 'ngTranslate'
        },
        'ngTranslateLoader': {
            deps: ['angular'],
            exports: 'ngTranslateLoader'
        },
        'ngTranslateLoaderStaticFile': {
            deps: ['angular'],
            exports: 'ngTranslateLoaderStaticFile'
        },
        'ngTranslateStorageCookie': {
            deps: ['angular'],
            exports: 'ngTranslateStorageCookie'
        },
        'ngTranslateStorageLocal': {
            deps: ['angular'],
            exports: 'ngTranslateStorageLocal'
        },
        'ngCookies': {
            deps: ['angular'],
            exports: 'ngCookies'
        },
        'ngMocks': {
            deps: ['angular'],
            exports: 'ngMocks'
        },
        'Home': {
            deps: ['angular'],
            exports: 'Home'
        },
        'Article': {
            deps: ['angular'],
            exports: 'Article'
        },
        'Poem': {
            deps: ['angular'],
            exports: 'Poem'
        },
        'Header': {
            deps: ['angular'],
            exports: 'Header'
        }
    },
    priority: ['angular'],
    deps: tests,
    callback: window.__karma__.start
});
