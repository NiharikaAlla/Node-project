const express = require('express');
const morgan = require('morgan');

const app = express();


const fs = require('fs');
const crypto =  require('crypto');


const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

/////////////middlewares
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV==="development"){
app.use(morgan('dev'));

}
app.use(express.json());

app.use(express.static(`${__dirname}/public/`));  ///this is for static pages
/////////////////////////////////////////////////////////////////////////////////


//const { sign } = require('node:crypto');
//ROUTING
// app.get('/', (req,res)=>{
// res
// .status(200).
// json({message: "Hello from the server side", app: 'Natours'});
// });


/////////////////////////////////////////

// app.use((req,res,next)=>{  ///middlewares
//  // console.log("Hello from middleware");
//   next();
// });
 
app.use((req,res,next)=>{
   req.requestTime = new Date().toISOString();
  // console.log(req.requestTime);
   next();


 });

 app.use('/api/v1/tours',tourRouter)
 app.use('/api/v1/users',userRouter)
 


module.exports =  app;
//console.log(app);










//ORIGINAL
// app.get('/api/v1/tours/:id/:x/:y', (req,res)=>{
    //if we do not specify all the parameters in URL of POSTMAN, we will run into an error

    //ONE WITH OPTIONAL PARAMETERS
   // app.get('/api/v1/tours/:id/:x/:y?', (req,res)=>{

    //IMPORTANT
    //We can do it by using optional parameters..that is typing a question mark

//////////////////////////////////////////////////////
  
   
   
//all the methods of express module are imported into express
