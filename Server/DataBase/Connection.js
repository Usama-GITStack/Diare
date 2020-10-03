//Initialization
const mongoose = require("mongoose")
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
//Paths
const CR = require("../Routes/CustomerRegistration");
const AA = require("../Routes/AddArtical");
const CG = require("../Routes/CustomerListGet");
const AG = require("../Routes/ArticalDataGet");
const AddEV = require("../Routes/AddEV");
const AddEV1 = require("../Routes/AddEV1");
//DataBase
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://osama:mahmood12@cluster0.jxi96.mongodb.net/Diare?retryWrites=true&w=majority", {
    useNewUrlParser: true
  }).then(() => {
    console.log("Connection with MongoDB......");
  })
  .catch(err => console.log("Could Not Connect", err));
//POST Opration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//Cors
app.use(cors());
//Connection Paths
app.use("/RegisterCustomer", CR);
app.use("/AddArticals", AA);
app.use("/CustomerList", CG);
app.use("/ListofArticals", AG);
app.use("/AddEntryVouchers", AddEV);
app.use("/AddExitVouchers", AddEV1);
//Listner
app.listen(3000, () => {
  console.log("Listning To The Port 3000....");
});