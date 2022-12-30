const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let arr = [];
  let i = increment;

  while(arr.length < 10){
    arr.push(addNums(i));
    i += increment;
  }
  return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let arr = [];
  let i = increment;

  while(arr.length < 10){
    arr.push(addManyNums(i));
    i += increment;
  }
  return arr;

}

module.exports = [addNums10, addManyNums10];
