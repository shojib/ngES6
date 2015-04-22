"use strict";

import * as factory from "./files/factory"

var HttpInterceptor = angular.module("ngGo.http.interceptor", []);

HttpInterceptor.factory("HttpInterceptor", factory);

export default HttpInterceptor;