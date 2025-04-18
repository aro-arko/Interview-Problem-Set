// Array of car objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Focus", year: 2020 },
  { make: "Chevrolet", model: "Malibu", year: 2016 },
];

// Function to sort cars by year (ascending)
function sortCarsByYear(carArray) {
  return carArray.sort((a, b) => a.year - b.year);
}

// Call the function and print the sorted array
const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
