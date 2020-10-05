const express = require("express");
const rout = express.Router();
const Checkout = require("../../DataBase/DataBase");
// Data Geting
rout.post("/", (req, res) => {
  console.log("Usama");
  var OldData = {
    RN: req.body.RN,
  };
  var NewData = {
    RN: req.body.RN,
    Date: req.body.Date,
    Amount: req.body.Amount,
    EXPENDITURE: req.body.EXPENDITURE,
    CM: req.body.CM,
    Wording: req.body.Wording,
  }
  Checkout.Checkout.updateOne(OldData, NewData)
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
