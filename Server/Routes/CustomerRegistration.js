const express = require("express");
const rout = express.Router();
const Customer = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new Customer.Customer({
    CustomerCode: req.body.CustomerCode,
    Civility: req.body.Civility,
    LastName: req.body.LastName,
    FirstName: req.body.FirstName,
    Phone: req.body.Phone,
    Category: req.body.Category,
    City: req.body.City,
    MadinaAddress: req.body.Address
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
