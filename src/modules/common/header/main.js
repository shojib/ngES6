"use strict";

import angular from "angular";
import directive from "./files/directive";

var Header = angular.module("ngES6.header", []);

Header.directive("header", directive);
