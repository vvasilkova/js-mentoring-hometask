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
  for (let redemption = 0; redemption <= 350; redemption++) {
    discount = (redemption * 0 / 100);
  }
  //console.log('max amount of discount' , discount);
  for (let redemption = 351; redemption <= 1350; redemption++) {
    discount = (redemption * 15 / 100);
  }
  //console.log('max amount of discount' , discount);
  for (let redemption = 1351; redemption <= 2700; redemption++) {
    discount = (redemption * 30 / 100);
  }
  // console.log('max amount of discount' , discount);
  for (let redemption = 2701; redemption <= 6500; redemption++) {
    discount = (redemption * 45 / 100);
  }
  // console.log('max amount of discount' , discount);
  for (let redemption = 6501; redemption <= 9999; redemption++) {
    discount = (redemption * 60 / 100);
  }
  // console.log('max amount of discount' , discount);

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
  let z = 1;
  while (m--) {
    z *= m + 1;
  }
  console.log('10!=', z);
}

// TaskDone Do..while
{
  const i = 10;
  let m = i;
  let z = 1;
  do {
    z *= m + 1;
  }
  while (m--);
  console.log('10!=', z);
}

// TaskDone For

{
  const i = 10;
  let m = i;
  let z = 1;
  for (let m = 10; m > 0; m--) {
    z *= m + 1;
  }
  console.log('10!=', z);
}

/**
 * return concatenated string from an array of substring
 */
/{
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
  };
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
  var x;
  for (x in personIncomes) {
    totalIncome += personIncomes[x];
  }
  console.log('totalIncome = ', totalIncome);
}

module.exports = calculateDiscount;