"use strict";

import "./http_interceptor/main";
import "./header/main";
import "./error/main";


var Common = angular.module("ngGo.common", [
	"ngGo.http.interceptor", 
	"ngGo.header", 
	"ngGo.error"
]);


export default Common;