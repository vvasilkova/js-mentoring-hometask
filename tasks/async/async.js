const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function printText(str, data) {
        console.log(data);
    }
    callbackFunction(printText);
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction()
        .then(data => console.log(data));
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    const data = await promiseFunction();
    console.log(data);
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function throwErr(err) {
        throw err;
    }
    callbackFunctionError(throwErr);
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch(err => console.log(err));
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    try {
        await promiseFunctionError;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};