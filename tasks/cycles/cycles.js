/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;

  //PLACE YOUR CODE HERE
   if (redemption >= 0 && redemption <= 350) {
    discount = 0;
  } else if (redemption >= 351 && redemption <= 1350) {
    discount = 15;
  } else if (redemption >= 1351 && redemption <= 2700) {
    discount = 30;
  } else if (redemption >= 2701 && redemption <= 6500) {
    discount = 45;
  } else {
    discount = 0;
  }
  return discount;
}
/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
}
// TaskDone While  
{
  const i = 10;
  let m = i;
  let fact = 1;
  while (m > 0) {
    fact *= m;
    m--;
  }
  console.log('10!=', fact);
}

// TaskDone Do..while
{
  const i = 10;
  let m = i;
  let fact = 1;
  do {
    fact *= m;
    m--;
  }
  while (m > 0);
  console.log('10!=', fact);
}

// TaskDone For

{
  const i = 10;
  let m = i;
  let fact = 1;
  for (m; m > 0; m--) {
    fact *= m;
  }
  console.log('10!=', fact);
}

/**
 * return concatenated string from an array of substring
 */
{
const substr = ["I", " love", " JS"];
}
//Variant1:
{
  const substr = ["I", " love", " JS"];
  var text = "";
  var i;
  for (i = 0; i < substr.length; i++) {
    text += substr[i] + " ";
  }
}
//Variant2:
{
  const substr = ["I", " love", " JS"];
  var txt = "";
  var x;
  for (x in substr) {
    txt += substr[x] + " ";
  }
}
//Variant3
{
  const substr = ["I", " love", " JS"];
  var txt = "";
  for (let i of substr) {
    txt += i + " ";
  }
}
/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
  var totalIncome = 0;
    for (let x in personIncomes) {
    totalIncome += personIncomes[x];
  }
  console.log('totalIncome = ', totalIncome);
}


module.exports = calculateDiscount;