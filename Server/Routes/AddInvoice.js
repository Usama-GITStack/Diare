const express = require("express");
const rout = express.Router();
const ReciptInvoice = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new ReciptInvoice.ReciptInvoice({
    FACTNUMBER: req.body.FACTNUMBER,
    Date: req.body.Date,
    Warehouse: req.body.Warehouse,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Phone: req.body.Phone,
    Address: req.body.Address,
    InvoiceData: req.body.InvoiceData,
    TotalInvoice: req.body.TotalInvoice
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
