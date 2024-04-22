// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers(drivers) {
  const firstTwo = drivers;
  return firstTwo.slice(0, 2);
}
console.log(returnFirstTwoDrivers(drivers));

function returnLastTwoDrivers(drivers) {
  const lastTwo = drivers;
  return lastTwo.slice(-2);
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a) {
  return function fareMultiplier(b) {
    return b * a;
  };
}

const fareDoubler = createFareMultiplier(2);
const doubledFare = fareDoubler(10);
console.log(doubledFare);

const fareTripler = createFareMultiplier(3);
const tripledFare = fareTripler(12);
console.log(tripledFare);

function selectDifferentDrivers(arrayOfDrivers, driverSelection) {
  return driverSelection(arrayOfDrivers);
}
const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers);

const firstLastDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(firstLastDrivers);
