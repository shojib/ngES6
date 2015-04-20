import * as angular from "angular";
import * as directive from "common/header/files/directive";

"use strict";

var Header = angular.module("ngGo.header", []);

Header.directive("header", directive);