/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
    return chars.map(function (char) {
        return char.name;
    });
}

/**
 * print (console.log) ids of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    return chars.forEach(char => console.log(char.name));
}

/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    let nonHumanCharacters = chars.filter(function (char) {
        return char.species !== 'Human';
    });
    return nonHumanCharacters;
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    let jerryInfo = chars.find(function (char) {
        return char.name === 'Jerry Smith';
    });
    return jerryInfo;
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    return chars.every(function (char) {
        return char.species === 'Human';
    });
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    return chars.some(char => char.type === 'Fish-Person');
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */

function minItem(arr) {
    let minItem = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (minItem > arr[i]) {
            minItem = arr[i];
        }
    }
    return arr.indexOf(minItem);
}

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};