// Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 };

for (let [key, value] of Object.entries(users)) {
    // console.log(`${key}: ${value}`);
  }
let newUsers = Object.entries(users);
console.log("Part 1 : ", newUsers);

for (let i=0; i < newUsers.length; i++) {
    newUsers[i][1] = newUsers[i][1] * 2;
}
console.log("Part 2 : ", newUsers);

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]