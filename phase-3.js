const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
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
  // Then, add timing code
  let arr = []
  let timeArr = [];
  for (let i = increment; i <= 10 * increment; i += increment){
    let startTime = Date.now();
    let result = addNums10(i);
    let endTime = Date.now();
    let time = endTime - startTime;
    console.log(`Timer for increment ${i}`);
    console.log(time);
    console.log("-------------------");
    arr.push(result);
    timeArr.push(time);
  }
  console.log(timeArr);
  return arr;


  // Your code here

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
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
// Then, add timing code
let arr = [];
let timeArr = []
for (let i = increment; i <= 10 * increment; i += increment){
  let startTime = Date.now();
  let result = addManyNums10(i);
  let endTime = Date.now();
  let time = endTime - startTime;

  console.log(`Timer for increment ${i}`);
  console.log(time);
  console.log("-------------------");
  arr.push(result);
  timeArr.push(time);
};
console.log(timeArr);
return arr;

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
