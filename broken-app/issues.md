# Broken App Issues

- The callback function in app.post should be asynchronous
- Error handling: catch block should accept an error as a parameter
- Async handling: Promise.all should be used to resolve the array of promises produced from the results initialization
- Const should be used instead of let when importing axios
- Const should also be used when initializing 'app'
- Middleware should be used to ensure that the request body can be parsed as JSON