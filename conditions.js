//if condition
const flag = true;
if (!flag) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

//while conditon
let i = 0;
while (i <= 10) {
  i++;
  console.log(i);
}

//do while loop
const j = 1;
do {
  console.log(j);
} while (j > 10);

//For loop
//from 1 to 10 give me common multiple values of 2 and 5
for (let k = 1; k <= 10; k++) {
  if (k % 2 == 0 && k % 5 == 0) {
    console.log("Common multiple of 2 & 5 is " + k);
  }
}
