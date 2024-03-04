### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
- Promises, callbacks, try and catch, async and await

- What is a Promise?
- A way of storing asynchronous data that depends on an external time-consuming operation. It's an object that represents the completion or failure of an async operation.

- What are the differences between an async function and a regular function?
- Async functions always return a promise and can pause and wait for specific executions to happen. Regular functions can not accomplish this without callbacks or other async handling.

- What is the difference between Node.js and Express.js?
- Node is a runtime environment that allows us to run javascript outside of a browser and Express is a server creation framework that allows us to set up RESTful APIs and handle web applications

- What is the error-first callback pattern?
- The error-first callback pattern is a convention in Node.js where callbacks passed to async functions take an error object as their first argument. If an error occurred during the async operation, the error object will contain details; otherwise, it is null

- What is middleware?
- A piece of functionality that can happen before a function is executed. These functions have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

- What does the `next` function do?
- Signals to Express to go to the next function in the stack. It can also signal Express to go to the nearest error handler.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
- We have to copy the github link repeatedly for each username
- Promise.all could be used to make all of these requests at once

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
