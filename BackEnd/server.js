const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})
const app = require("./app");
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_DB_PATH,{autoIndex:true}).then(() => console.log("DB Connection Successfull")).catch(err => console.log("Error in Connection")
 )


app.listen(port, ()=>{
    console.log(`Server connected to port ${port}`);
})
