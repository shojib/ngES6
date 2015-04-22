"use strict";

var Ctrl = function(scope, translate, log) {
  return scope.setLang = function(langKey) {
    translate.use(langKey);
    return log.debug("Language key: " + langKey);
  };
};

Ctrl.$inject = ["$scope", "$translate", "$log"];

export default Ctrl;