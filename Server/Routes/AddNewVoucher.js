const express = require("express");
const rout = express.Router();
const NewInvoice = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new NewInvoice.NewInvoice({
    Document: req.body.Document,
    ITEMCODE: req.body.ITEMCODE,
    ARTICLENAME: req.body.ARTICLENAME,
    AMOUNT: req.body.AMOUNT,
    UNITS: req.body.UNITS,
    ITEMVALUE: req.body.ITEMVALUE,
    TOTALVALUE: req.body.TOTALVALUE,
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
