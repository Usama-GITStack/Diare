const express = require("express");
const rout = express.Router();
const ReciptInvoice = require("../../DataBase/DataBase");
// Data Geting
rout.post("/", (req, res) => {
  console.log("Usama");
  var OldData = {
    FACTNUMBER: req.body.FACTNUMBER,
  };
  var NewData = {
    FACTNUMBER: req.body.FACTNUMBER,
    Date: req.body.Date,
    Warehouse: req.body.Warehouse,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Phone: req.body.Phone,
    Address: req.body.Address,
  }
  ReciptInvoice.ReciptInvoice.updateOne(OldData, NewData)
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
