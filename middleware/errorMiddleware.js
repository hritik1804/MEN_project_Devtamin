// // errorMiddleware.js

// const errorHandler = (err, req, res, next) => {
//     // Set the status code, if not set already, default to 500 (Internal Server Error)
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
//     res.status(statusCode);
  
//     res.json({
//       message: err.message,
//       // Stack trace only in development mode for better debugging
//       //change it to development or production and the env file as well
//       stack: process.env.NODE_ENV === 'production' ? null : err.stack
//     });
//   };
  
//   module.exports = errorHandler;
  

const errorMiddleware = (err, req, res, next) => {
    console.log('here is an error middleware');
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null});
}

module.exports = errorMiddleware