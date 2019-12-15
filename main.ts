import FuelCalculator from './fuel-calculator';
import ModuleMasses from './module-masses';

console.log('-----------------------------------------------------------------');
console.log('Day 1');
console.log('-----------------------------------------------------------------');
console.log(`Fuel for modules: ${(new FuelCalculator).calculate(ModuleMasses)}`);