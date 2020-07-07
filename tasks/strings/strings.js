/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str) {
  if (typeof str != 'string') {
    return 'This is not a string!';
  } else {
    return str.split('').reverse().join('');
  }
}


/**
 * 1. Calculate a century by given year
 * if a number is passed
 * @param {number} year
 */
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
  let regex = new RegExp(char, 'g');
  if (str.match(regex) == null) {
    return 0;
  } else {
    return str.match(regex).length;
  }
}

/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  let regChange = /10/g;
  let result = text.replace(regChange, 'ten');
  return result;
}

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  let re = /([\[(])(.+?)([\])])/gi;
  let newstr = text.replace(re, '[CONFIDENTIAL]');
  console.log(newstr);
  return newstr;
}

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};