import * as angular from "angular";
import * as factory from "common/http_interceptor/files/factory";

"use strict";

var HttpInterceptor = angular.module("ngGo.http.interceptor", []);

HttpInterceptor.factory("HttpInterceptor", factory);