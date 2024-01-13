const user = [
  { firstName: "john", lastName: "Cena", age: 50 },
  { firstName: "Jeera", lastName: "Matt", age: 27 },
  { firstName: "Sam", lastName: "Wana", age: 41 },
  { firstName: "Mira", lastName: "Bhhat", age: 50 },
];

//! return the firstName of user whose age is greater than 30 using filter and map
// const output = user.filter((elem) => elem.age > 30).map((x) => x.firstName);

//! return the firstName of user whose age is greater than 30 using reduce
const output = user.reduce((acc, curr) => {
  if (curr.age > 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

// const output = user.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age] + 1;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
console.log(output);
