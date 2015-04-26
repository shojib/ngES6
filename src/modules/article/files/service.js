"use strict";

var Service = function(factory) {
  return {
    find: function(query) {
      return factory.get({
        q: query
      }).$promise;
    }
  };
};

Service.$inject = ["factory"];
