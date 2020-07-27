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
    callbackFunction(printTesxt);
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction()
        .then(data => {
            console.log(data);
        });
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
    throw new Error ('oops');
  }
  callbackFunctionError(throwErr);
  }

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    try{
        const result = await promiseFunctionError();
        } catch(e){
            console.log(e);
        } 
    }
    
/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    const data = await promiseFunctionError();
console.log(data);
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};