const express = require("express");
const rout = express.Router();
const ExitV = require("../../DataBase/DataBase");
// Data Geting
rout.post("/", (req, res) => {
  console.log("Usama");
  var OldData = {
    Document: req.body.Document,
  };
  var NewData = {
    Date: req.body.Date,
    Document: req.body.Document,
    Warehouse: req.body.Warehouse,
    Reception: req.body.Reception,
  }
  ExitV.ExitV.updateOne(OldData, NewData)
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
