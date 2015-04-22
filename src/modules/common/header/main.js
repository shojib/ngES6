"use strict";

import * as directive from "./files/directive";

var Header = angular.module("ngGo.header", []);

Header.directive("header", directive);

export default Header;