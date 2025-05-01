// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config({path:"./config.env"})
// const app = require("./app");
// const port = process.env.PORT;

// mongoose.connect(process.env.MONGO_DB_PATH,{autoIndex:true}).then(() => console.log("DB Connection Successfull")).catch(err => console.log("Error in Connection")
//  )


// app.listen(port, ()=>{
//     console.log(`Server connected to port ${port}`);
// })
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require("./app"); // Import your Express app
const port = process.env.PORT || 3000;

dotenv.config({ path: './config.env' });

// Use the Express app instance
// app.use(cors());  //  Already in app.js
// app.use(bodyParser.json()); // Already in app.js

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_PATH, { autoIndex: true })
  .then(() => console.log('DB Connection Successful'))
  .catch(err => {
    console.error('Error in Connection:', err);
    process.exit(1);
  });

//  Mount the routes  - already done in app.js
// app.use('/api/v1/loan-products', loanProductRoutes);

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});