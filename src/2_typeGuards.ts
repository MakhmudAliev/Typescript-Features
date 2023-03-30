type Make = 'bmw' | 'toyota';

interface CarBase {
  year: number;
  make: Make;
}

interface BmwBase extends CarBase {
  make: 'bmw';
  model: 'x5' | 'x7';
  hasSunroof: boolean;
}

interface BmwX5 extends BmwBase {
  model: 'x5';
}

interface BmwX7 extends BmwBase {
  model: 'x7';
}

interface ToyotaBase extends CarBase {
  make: 'toyota';
  model: 'rav4' | 'corolla';
  isElectric: boolean;
}

interface ToyotaRav4 extends ToyotaBase {
  model: 'rav4';
}

interface ToyotaCorolla extends ToyotaBase {
  model: 'corolla';
}

type Bmw = BmwX5 | BmwX7;
type Toyota = ToyotaRav4 | ToyotaCorolla;

type Car = Bmw | Toyota;

function isToyota(car: Car): car is Toyota {
  return car.make === 'toyota';
}

function isBmw(car: Car): car is Bmw {
  return car.make === 'bmw';
}

function doSmth(car: Car) {
  if (car.make === 'bmw' && car.model === 'x5') {
    console.log(car.hasSunroof);
  }
  if (car.make === 'toyota' && car.model === 'corolla') {
    console.log(car.isElectric);
  }
  if (isToyota(car)) {
    console.log(car.isElectric);
  }
  if (isBmw(car)) {
    console.log(car.hasSunroof);
  }
}
