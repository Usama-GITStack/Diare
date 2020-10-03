const express = require("express");
const rout = express.Router();
const ExitInvoice = require("../DataBase/DataBase");
// Data Geting
rout.get("/", (req, res) => {
  console.log(req.headers.auth);
  ExitInvoice.ExitInvoice.find({
    Document: req.headers.auth
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
          msg: findObject
        });
      }
    }
  });
});
module.exports = rout;
