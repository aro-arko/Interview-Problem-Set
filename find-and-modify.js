// Array of people
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
];

// Function to update age of a person by name
function updateAgeByName(peopleArray, personName, newAge) {
  const person = peopleArray.find((p) => p.name === personName);
  if (person) {
    person.age = newAge;
  }
  return peopleArray;
}

// Update Bob's age to 35
const updatedPeople = updateAgeByName(people, "Bob", 35);

// Print the updated array
console.log(updatedPeople);
