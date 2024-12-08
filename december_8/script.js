const houses = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const speed = 10; // in km/h
let totalTime = 0; // in h
let distance = 0; // in km

function calculateDeliveryTime(houses, speed) {
  // to [1, 2, 3, 4, 5, 6], then calculate sum and double distance
  houses.flat().forEach((x) => {
    distance += x;
    totalTime = (distance / speed) * 2;
  });
  return totalTime;
}

console.log(calculateDeliveryTime(houses, speed));
// console.log('Distance ' + distance + 'km, total Time ' + totalTime + 'hours.');
