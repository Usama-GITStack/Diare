const express = require("express");
const rout = express.Router();
const Invoice = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new Invoice.Invoice({
    DATED: req.body.DATED,
    CLIENTNAME: req.body.CLIENTNAME,
    DOCUMENTNUMBER: req.body.DOCUMENTNUMBER,
    TOTALAMOUNT: req.body.TOTALAMOUNT,
    GOODDELIVERYGENERATE: req.body.GOODDELIVERYGENERATE,
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
