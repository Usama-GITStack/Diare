const express = require("express");
const rout = express.Router();
const NewWarehouseStuff = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new NewWarehouseStuff.NewWarehouseStuff({
    WAREHOUSECODE: req.body.WAREHOUSECODE,
    ITEMNAME: req.body.ITEMNAME,
    QUANTITYINSTOCK: req.body.QUANTITYINSTOCK,
    UNITS: req.body.UNITS,
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
