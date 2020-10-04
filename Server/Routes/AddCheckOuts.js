const express = require("express");
const rout = express.Router();
const Checkout = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new Checkout.Checkout({
    RN: req.body.RN,
    Date: req.body.Date,
    Amount: req.body.Amount,
    EXPENDITURE: req.body.EXPENDITURE,
    CM: req.body.CM,
    Wording: req.body.Wording,
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
