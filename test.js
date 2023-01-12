let err = new Error("this is an error");
err.name = 'new error'
// err.stack = 'hello';
console.log(err.stack)