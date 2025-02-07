// function sum(num1 = 10, num2 = 5) { // default parameter
//     console.log(num1, num2)
//     return num1 + num2;
// }
// console.log(sum(1, 4))
// console.log(sum())

const users = [
  {
    name: "Person 1",
    age: 31,
    city: "Ygn",
  },
  {
    name: "Person 2",
    age: 41,
    city: "Ygn",
  },
  {
    name: "Person 3",
    age: 52,
    city: "Mdy",
  },
];
// let getAllNames = users.map(user => `${user.name} live in ${user.city} and age is ${user.age}`);

// let getAllNames = users.map((user) => {
//   const { name, age, city } = user;
//   return `${name} live in ${city} and age is ${age}`;
// });
// console.log(getAllNames);

// let getAllUsersFromYgn = users.filter(user => user.city === "Ygn");
// console.log(getAllUsersFromYgn)

// let getUserFromYgn = users.find(user => user.city === "Ygn");
// console.log(getUserFromYgn)

// let getSecUserFromYgn = users.filter((user) => {
//   const getAllUsersFromYgn = user.city === "Ygn";
//   return getAllUsersFromYgn;
// });
// console.log(getSecUserFromYgn[1])

// let getUserSome = users.some(user => user.age > 30);
// console.log(getUserSome) // true

let getUserEvery = users.every((user) => user.age > 30);
console.log(getUserEvery); // false
