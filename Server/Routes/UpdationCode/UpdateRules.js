const express = require("express");
const rout = express.Router();
const Rules = require("../../DataBase/DataBase");
// Data Geting
rout.post("/", (req, res) => {
  console.log("Usama");
  var OldData = {
    RC: req.body.RC,
  };
  var NewData = {
    RC: req.body.RC,
    Date: req.body.Date,
    CC: req.body.CC,
    CN: req.body.CN,
    PM: req.body.PM,
    Bank: req.body.Bank,
    Checkout: req.body.Checkout,
    Amount: req.body.Amount
  }
  Rules.Rules.updateOne(OldData, NewData)
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
