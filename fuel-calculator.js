"use strict";
exports.__esModule = true;
var FuelCalculator = /** @class */ (function () {
    function FuelCalculator() {
    }
    FuelCalculator.prototype.calculate = function (moduleMasses) {
        var _this = this;
        return moduleMasses.reduce(function (acc, moduleMass) {
            var fuel = _this._calculateFuelPerUnit(moduleMass);
            var fuelForFuel = function (mass) {
                var fuel = _this._calculateFuelPerUnit(mass);
                if (fuel > 0) {
                    return fuel + fuelForFuel(fuel);
                }
                return 0;
            };
            return acc + fuel + fuelForFuel(fuel);
        }, 0);
    };
    FuelCalculator.prototype._calculateFuelPerUnit = function (unitMass) {
        return (Math.floor(unitMass / 3)) - 2;
    };
    return FuelCalculator;
}());
exports["default"] = FuelCalculator;
