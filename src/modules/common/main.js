"use strict";

import "./http_interceptor/main";
import "./header/main";
import "./error/main";

var Common = angular.module("ngES6.common", [
	"ngES6.http.interceptor",
	"ngES6.header",
	"ngES6.error.404"
]);
