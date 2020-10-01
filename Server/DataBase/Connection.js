//Initialization
const mongoose = require("mongoose")
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
//Paths

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

//Listner
app.listen(3000, () => {
  console.log("Listning To The Port 3000....");
});
