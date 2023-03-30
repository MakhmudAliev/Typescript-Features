// type CarBrand = 'bmw' | 'toyota' | 'nissan';

// interface CarBase {
//   year: number;
//   brand: CarBrand;
// }

// interface Bmw extends CarBase {
//   climateControl: boolean;
//   brand: 'bmw';
// }

// interface Toyota extends CarBase {
//   conditioner?: boolean;
//   brand: 'toyota';
// }

// interface Nissan extends CarBase {
//   climate?: boolean;
//   brand: 'nissan';
// }

// type Car = Bmw | Toyota | Nissan;

// function exhaustiveCheck(param: never) {
//   console.log('process the type', param);
// }

// function doSmthWithCar(car: Car) {
//   switch (car.brand) {
//     case 'toyota':
//       console.log('toyota');
//       break;
//     case 'bmw':
//       console.log('bmw');
//       break;
//     default:
//       exhaustiveCheck(car);
//   }
// }

// console.log('test');
