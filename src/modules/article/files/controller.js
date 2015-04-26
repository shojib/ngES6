"use strict";

var Ctrl = function(scope, service, log) {
  scope.searchQuery = "Technology";

  scope.findArticles = function(event) {
    if (event.which === 13 || event === '') {
      service.find(scope.searchQuery).then((function(response) {
        scope.articles = response;
      }), function(error) {
        log.debug("Error status: " + error.status);
      });
    }
  };

};

Ctrl.$inject = ["$scope", "service", "$log"];
