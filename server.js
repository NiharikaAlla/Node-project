
const mongodb = require("mongodb");



const MongoClient = mongodb.MongoClient;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
 
dotenv.config();
const app = require('./app');




const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
console.log(DB);


mongoose.Promise = global.Promise;

mongoose
  .connect(DB, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  //.then(() => console.log('DB connection successful!')).catch(err => console.log(err));



//console.log(process.env);
const port =3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
  