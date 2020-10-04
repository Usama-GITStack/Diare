const express = require("express");
const rout = express.Router();
const AddArticals = require("../../DataBase/DataBase");
// Data Geting
rout.post("/", (req, res) => {
  console.log("Usama");
  var OldData = {
    ItemCode: req.body.ItemCode,
  };
  var NewData = {
    ItemCode: req.body.ItemCode,
    Unit: req.body.Unit,
    Nameofthearticle: req.body.Nameofthearticle,
    CostPrice: req.body.CostPrice,
    SellingPrice: req.body.SellingPrice,
    Category: req.body.Category,
    Margin: req.body.Margin
  }
  AddArticals.AddArticals.updateOne(OldData, NewData)
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
