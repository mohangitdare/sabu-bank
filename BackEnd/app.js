const express = require("express")
const app = express();
const loanProductRoutes = require("./Routes/loanProductRoutes") 
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use("/api/v1/loan-products",loanProductRoutes);

module.exports = app;