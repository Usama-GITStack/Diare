const express = require("express");
const rout = express.Router();
const Warehouse = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new Warehouse.Warehouse({
    WAREHOUSECODE: req.body.WAREHOUSECODE,
    NAMEOFWAREHOUSE: req.body.NAMEOFWAREHOUSE,
    ADDRESS: req.body.ADDRESS,
    NAMEOFMANAGER: req.body.NAMEOFMANAGER,
    PHONE: req.body.PHONE,
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
