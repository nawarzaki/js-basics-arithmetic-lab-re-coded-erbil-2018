/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const oldID = Math.floor(Math.random() * 100) + 1;
const newID = (1000000000 + oldID)
const ages = [26.4, 21, 49.5, 83, 99, 53.3, 74, 94.9, 40, 56.2];
const currentAge = ages[Math.floor(Math.random() * ages.length)];
const currentAgeIsInteger = Number.isInteger(currentAge);
