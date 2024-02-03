function MissingNumber(nums) {
    const n = nums.length;
    let j = 0;
    while (j <= n) {
      if (nums.includes(j)==false) {
        return j;
    } 
        j++;
      }


 
}
//read the array
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter numbers separated by commas: ', (userInput) => {
  const userArray = userInput.split(",").map(Number);
  rl.close();

  console.log("The missing number is:",MissingNumber(userArray)); // Output: 2
});




