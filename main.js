"use strict";
exports.__esModule = true;
var fuel_calculator_1 = require("./fuel-calculator");
var module_masses_1 = require("./module-masses");
console.log('-----------------------------------------------------------------');
console.log('Day 1');
console.log('-----------------------------------------------------------------');
console.log("Fuel for modules: " + (new fuel_calculator_1["default"]).calculate(module_masses_1["default"]));
