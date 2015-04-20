import * as http_interceptor from "common/http_interceptor/main";
import * as header from "common/header/main";
import * as error from "common/error/main";

"use strict";

var Common = angular.module("ngGo.common", [
	"ngGo.http.interceptor", 
	"ngGo.header", 
	"ngGo.error"
]);

