const houses = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const speed = 10; // in km/h
let totalTime = 0; // in h
let totalDistance = 0; // in km
const home = [0, 0];

function calculateDeliveryTime(houses, speed) {
  // distance to next stop
  let stop1 = Math.sqrt(Math.pow(houses[0][0], 2) + Math.pow(houses[0][1], 2));
  let stop2 = Math.sqrt(
    Math.pow(houses[1][0] - houses[0][0], 2) +
      Math.pow(houses[1][1] - houses[0][1], 2)
  );
  let stop3 = Math.sqrt(
    Math.pow(houses[2][0] - houses[1][0], 2) +
      Math.pow(houses[2][1] - houses[1][1], 2)
  );
  // distance to home
  let stopHome = Math.sqrt(
    Math.pow(houses[2][0] - home[0], 2) + Math.pow(houses[2][1] - home[1], 2)
  );

  totalDistance = (stop1 + stop2 + stop3 + stopHome).toFixed(2);
  totalTime = (totalDistance / speed).toFixed(1);
  return totalTime;
}

console.log(calculateDeliveryTime(houses, speed));
// console.log('Total distance: ' + totalDistance + 'km, total time: ' + totalTime + 'hours.');
