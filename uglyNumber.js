'use strict'

function maxDivides(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
  }
  return number;
}

function isUgly(numberUgly) {
  numberUgly = maxDivides(numberUgly, 2);
  numberUgly = maxDivides(numberUgly, 3);
  numberUgly = maxDivides(numberUgly, 5);

  //return (numberUgly === 1) ? true : false;
  return numberUgly;
}

function getUglyNo(input) {//7
  let i = 1;
  let countUglyNumber = 1; // ugly number count

  while(input > countUglyNumber) {
    i++;
    if(isUgly(i) === 1) {//isUgly(1)
      countUglyNumber++;
    }
    // return i;
  }
  return i;
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24

// 1 2 3 4 5 6 8 9 10 12