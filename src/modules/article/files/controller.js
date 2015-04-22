"use strict";

var Ctrl = function(scope, service, log) {
  scope.search_query = "Technology";
  return scope.find_articles = function(event) {
    if (event.which === 13 || event === '') {
      return service.find_articles(scope.search_query).then((function(response) {
        return scope.articles = response;
      }), function(error) {
        return log.debug("Error status: " + error.status);
      });
    }
  };
};

Ctrl.$inject = ["$scope", "service", "$log"];

export default Ctrl;