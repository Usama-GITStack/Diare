const express = require("express");
const rout = express.Router();
const Rules = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new Rules.Rules({
    RC: req.body.RC,
    Date: req.body.Date,
    CC: req.body.CC,
    CN: req.body.CN,
    PM: req.body.PM,
    Bank: req.body.Bank,
    Checkout: req.body.Checkout,
    Amount: req.body.Amount
  });
  console.log(myData);
  myData.save()
    .then(item => {
      res.send({
        success: "Data Is Save",
        status: 500
      });
    })
    .catch(err => {
      res.send({
        fail: "unable to save to database",
      });
    });
});
module.exports = rout;
