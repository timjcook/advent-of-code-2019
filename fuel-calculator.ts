export default class FuelCalculator {
  calculate(moduleMasses: number[]) {
    return moduleMasses.reduce((acc, moduleMass) => {
      const fuel = this._calculateFuelPerUnit(moduleMass)
      
      const fuelForFuel = (mass: number) => {
        const fuel = this._calculateFuelPerUnit(mass);
        if (fuel > 0) {
          return fuel + fuelForFuel(fuel);
        }
        return 0;
      }

      return acc + fuel + fuelForFuel(fuel);
    }, 0);
  }

  _calculateFuelPerUnit(unitMass: number) {
    return (Math.floor(unitMass / 3)) - 2;
  }
}
