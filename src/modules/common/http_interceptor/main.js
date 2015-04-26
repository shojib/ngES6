"use strict";

import angular from "angular";
import factory from "./files/factory"

var HttpInterceptor = angular.module("ngES6.http.interceptor", []);

HttpInterceptor.factory("HttpInterceptor", factory);
