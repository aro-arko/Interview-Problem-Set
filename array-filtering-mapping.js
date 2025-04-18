const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Clara", age: 22, gender: "female" },
  { name: "David", age: 28, gender: "male" },
  { name: "Eve", age: 35, gender: "female" },
];

function getMaleNames(peopleArray) {
  return peopleArray
    .filter((people) => people.gender !== "female")
    .map((people) => people.name);
}

const maleNames = getMaleNames(people);
console.log(maleNames);
