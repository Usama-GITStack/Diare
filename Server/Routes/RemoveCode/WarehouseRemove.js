const express = require("express");
const rout = express.Router();
const Warehouse = require("../../DataBase/DataBase");
// Data Geting
rout.post("/", (req, res) => {
  console.log("Usama");
  Warehouse.Warehouse.deleteOne({
    WAREHOUSECODE: req.body.WAREHOUSECODE,
  }, (err, findObject) => {
    if (err) {
      res.send({
        msg: "The Error Occure"
      });
    } else {
      if (!findObject) {
        res.send({
          msg: "Data Not Found"
        });
      } else {
        console.log(findObject);
        res.send({
          msg: "Data Delete"
        });
      }
    }
  });
});
module.exports = rout;
