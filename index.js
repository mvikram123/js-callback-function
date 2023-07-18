//In JavaScript, a callback function is a function that is passed as 
//an argument to another function and is executed after the completion of that function.
 //Callbacks are commonly used in asynchronous programming to handle events or asynchronous operations like fetching data from a server, reading files, or waiting for user input.





// Example function with a callback
function doSomethingAsync(callback) {
  console.log("Start of the async operation.");
  // Simulating an asynchronous operation with a timeout
  setTimeout(function() {
    console.log("Async operation is complete.");
    // Executing the callback function after the async operation is done
    callback();
  }, 10000);
}

// Callback function to be executed after the async operation
function onAsyncOperationComplete() {
  console.log("Callback function executed: Async operation is done!");
}

// Calling the main function with the callback
doSomethingAsync(onAsyncOperationComplete);



// In this example, we have a function doSomethingAsync that takes a callback function as an argument. Inside doSomethingAsync, we simulate an asynchronous operation using setTimeout with a delay of 2000 milliseconds (2 seconds). After the delay, the asynchronous operation is considered complete, and we call the provided callback function (callback()).

// We then define a separate function called onAsyncOperationComplete, which will serve as our callback. It simply logs a message to the console when executed.

// Finally, we call the doSomethingAsync function and pass onAsyncOperationComplete as the callback. When the asynchronous operation inside doSomethingAsync is complete (after the 2-second delay), the callback function (onAsyncOperationComplete) is executed, and the message "Callback function executed: Async operation is done!" is logged to the console.

// This way, the callback mechanism allows us to handle the result of an asynchronous operation in a more organized and predictable manner.


//output=start of the async operation
       // async operation is complete(after 10 second)
       // callback function is executed : async operation is done.