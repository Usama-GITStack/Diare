const express = require("express");
const rout = express.Router();
const AddArticals = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new AddArticals.AddArticals({
    ItemCode: req.body.ItemCode,
    Unit: req.body.Unit,
    Nameofthearticle: req.body.Nameofthearticle,
    CostPrice: req.body.CostPrice,
    SellingPrice: req.body.SellingPrice,
    Category: req.body.Category,
    Margin: req.body.Margin
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
