const express = require("express");
const rout = express.Router();
const Warehouse = require("../../DataBase/DataBase");
// Data Geting
rout.post("/", (req, res) => {
  console.log("Usama");
  var OldData = {
    WAREHOUSECODE: req.body.WAREHOUSECODE,
  };
  var NewData = {
    WAREHOUSECODE: req.body.WAREHOUSECODE,
    NAMEOFWAREHOUSE: req.body.NAMEOFWAREHOUSE,
    ADDRESS: req.body.ADDRESS,
    NAMEOFMANAGER: req.body.NAMEOFMANAGER,
    PHONE: req.body.PHONE,
  }
  Warehouse.Warehouse.updateOne(OldData, NewData)
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
