const express = require("express");
const rout = express.Router();
const Customer = require("../../DataBase/DataBase");
// Data Geting
rout.post("/", (req, res) => {
  console.log("Usama");
  var OldData = {
    CustomerCode: req.body.CustomerCode,
  };
  var NewData = {
    CustomerCode: req.body.CustomerCode,
    Civility: req.body.Civility,
    LastName: req.body.LastName,
    FirstName: req.body.FirstName,
    Phone: req.body.Phone,
    Category: req.body.Category,
    City: req.body.City,
    MadinaAddress: req.body.Address
  }
  Customer.Customer.updateOne(OldData, NewData)
    .then(() => {
      res.send({
        success: "Your File Is Update",
        status: 500
      });
    })
    .catch(err => {
      res.status(400).send({
        fail: "Your File Is Not Save",
      });
    });
});
module.exports = rout;
